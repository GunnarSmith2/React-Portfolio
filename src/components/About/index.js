import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Web Developer</p>
      <hr />
      <img
        className="my-photo"
        src={process.env.PUBLIC_URL + "/img/my-photo.jpg"}
        alt="Gunnar Smith"
      />
      <p className="content is-italic mt-4">
        My name is Gunnar Smith, I am a full stack web developer from Texas. I
        love learning and spending time with my family.
      </p>
    </div>
  );
}

export default About;
