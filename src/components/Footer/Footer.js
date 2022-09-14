import "./Footer.scss";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../../darkTheme.scss";

const Footer = () => {
  return (
    <div className="footer">
    <div className="f-container">
      <div className="f-left">
        <div className="location">
          <MdLocationPin className="icons" />
          <span>Thane, Maharashtra</span>
        </div>

        <div className="phone">
          <BsTelephoneFill className="icons" />
          <span>+91 8097639445</span>
        </div>

        <div className="email">
          <BsFillEnvelopeFill className="icons" />
          <span>pournima2496@gmail.com</span>
        </div>
      </div>
      <div className="f-right">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam
          veniam minima odit quisquam rerum cupiditate! Placeat possimus
          dignissimos ex excepturi molestiae corporis, laborum corrupti.
        </p>
        <div>
          <AiFillLinkedin className="icons" />
          <AiFillGithub className="icons" />
        </div>
      </div>
    </div>
    <div className="copy">
      <span>copyright&copy;2022</span>
    </div>
    </div>
  );
};

export default Footer;
