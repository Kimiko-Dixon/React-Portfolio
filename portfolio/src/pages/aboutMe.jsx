import headShot from "../img/profile-photo.jpg";

export default function AboutMe() {
  return (
    <>
      <h2>About Me</h2>
      <div id="head-shot">
        <div className="content">
          <img src={headShot} alt="Kimiko Dixon" />
        </div>
      </div>
      <div id="about">
        <div className="content">
          <p>
            I am a former baker who decided to take the leap into the field of
            Technology. Although I am new to programming, I am eager to learn,
            and with my education via the UCF Bootcamp, I assure that I will be
            quick to pick up new information. I bring to the table the skills of
            great communication, problem-solving, and teamwork as well as a
            detailed oriented mindset.
          </p>
        </div>
      </div>
    </>
  );
}
