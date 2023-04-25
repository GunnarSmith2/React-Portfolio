import React from "react";
import Project from "../Projects";

const projects = [
  {
    id: 0,
    title: "Date Destresser",
    languages: "HTML, CSS, JavaScript",
    packages: "none",
    image: "/img/Date-Destresser.png",
    description:
      "The Date Destresser is a web application that randomly selects a cocktail and a movie based on the users choice of streaming service and genre.",
    repo: "https://github.com/yvettesalinas/date-destresser",
    live: "https://yvettesalinas.github.io/date-destresser/?",
  },
  {
    id: 1,
    title: "Run Buddy",
    languages: "HTML, CSS",
    packages: "none",
    image: "/img/Run-Buddy.png",
    description:
      "A website that offers training services with personal trainers",
    repo: "https://github.com/GunnarSmith2/run-buddy",
    live: "https://gunnarsmith2.github.io/run-buddy/",
  },
  {
    id: 2,
    title: "JavaScript Quiz",
    languages: "HTML, CSS, JavaScript",
    packages: "none",
    image: "/img/js-quiz.png",
    description:
      "a timed code quiz that's made up of multiple-choice questions.",
    repo: "https://github.com/GunnarSmith2/JS-coding-quiz",
    live: "https://gunnarsmith2.github.io/JS-coding-quiz/",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    languages: "HTML, JavaScript",
    packages: "none",
    image: "/img/weather-dashboard.png",
    description:
      " a weather dashboard using a server side api to be able to pull the weather and 5 day forecast for cities around the world.",
    repo: "https://github.com/GunnarSmith2/Weather-Dashboard",
    live: "https://gunnarsmith2.github.io/Weather-Dashboard/",
  },
  {
    id: 4,
    title: "The Last Chapter",
    languages: "Handlebars, CSS, JavaScript",
    packages:
      "bcrypt, compression, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql, mysql2, passport, passport-local, sequelize",
    image: "/img/the-last-chapter.png",
    description:
      "this projet, the group decided on creating a book ecommerce application. In the website users are able to browse books as well as add them to a wishlist to save for later.",
    repo: "https://github.com/Soulreaper077/The-last-chapter",
    live: "https://still-escarpment-06943.herokuapp.com/",
  },
  {
    id: 5,
    title: "Work Calendar",
    languages: "HTML, CSS, JavaScript",
    packages: "none",
    image: "/img/work-calendar.png",
    description:
      "creating a simple work calendar to save events we have planned for that day.",
    repo: "https://github.com/GunnarSmith2/Work-Calendar",
    live: "https://gunnarsmith2.github.io/Work-Calendar/",
  },
  {
    id: 6,
    title: "Tesla Website Clone",
    languages: "React, Styled-Components, Javascript",
    packages: "react-redux, mui-icons-material",
    image: "/img/Tesla.png",
    description:
      "creating a simple work calendar to save events we have planned for that day.",
    repo: "https://github.com/GunnarSmith2/TeslaClone",
    live: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
