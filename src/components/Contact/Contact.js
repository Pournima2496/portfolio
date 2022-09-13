import "./Contact.scss";
import { BG } from "../../constants/images";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gawxh0v",
        "template_v5f5hvb",
        form.current,
        "SwckExLAQjovjVSDo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container contact" id="contact">
      <div className="left">
        <img src={BG} alt="" />
      </div>
      <div className="right">
        <form autoComplete="off" ref={form} onSubmit={sendEmail}>
          <h1 className="heading">Contact Me</h1>

          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea
            name="message"
            placeholder="Message"
            id=""
            cols="30"
            rows="5"
          />
          <input type="submit" value="Send" className="btn btn-1" />
          <span>{done && "Thanks For Contacting Me"} </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
