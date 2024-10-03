import headShot from "../../img/profile-photo.jpg";
import './aboutMe.css'

export default function AboutMe() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={headShot} alt="Kimiko Dixon" id="head-shot"/>
          <p className="about-content">
            I am a former baker who decided to take the leap into the field of
            Technology. Although I am new to programming, I am eager to learn,
            and with my education via the UCF Bootcamp, I assure that I will be
            quick to pick up new information. I bring to the table the skills of
            great communication, problem-solving, and teamwork as well as a
            detailed oriented mindset.
          </p>
      </div>
  );
}
