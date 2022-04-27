import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>Upcoming Event</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
          voluptatibus numquam corrupti veniam. Iure aut omnis assumenda
          sapiente voluptas exercitationem dicta distinctio sint cum
          consequatur, earum mollitia esse amet!
        </p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  );
}

export default About;
