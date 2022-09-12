import { Skills } from "../../constants/images";
import "./About.scss";

const About = () => {
  return (
    <div className="container about" id="about">
      <div className="left">
        <img src={Skills} alt="" width="500px" height="500px" />
      </div>
      <div className="right">
        <h1 className="heading">About Me</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid vero
          ipsam mollitia magnam itaque iure cupiditate veniam tenetur asperiores
          quidem, fugit aut laborum suscipit aperiam neque saepe, omnis quod
          facere numquam. Iusto beatae optio dolorem facilis accusantium nam
          quos est corporis, odit quia reprehenderit quam. Dicta blanditiis
          officiis esse suscipit.
        </p>

        <div className="popup">
          <span>Qualification: BScIT</span>
        </div>
       
      </div>
    </div>
  );
};

export default About;
