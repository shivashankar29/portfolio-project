import React from "react";
import myImage from "../images/Shiva.jpg";
import OnScrollTextReveal from "./TextReveal";

function About() {
    return(
        <OnScrollTextReveal>
        <div className="profile" id="About">
        <div className="img-container">
        <img src={myImage} alt="image" />
        </div>
        <div className="profile-content">
        <h3>About <span>Me</span>.</h3>
        <p>Hello there! I'm Shiva Shankar, a passionate web developer who is enthusiastic about continuous learning and growth. I discovered my interest in web development during my school years which led me to immerse myself in this dynamic field. I am driven by self-motivated learning and constantly seek out new technologies, frameworks, and design <br /><br />
        I am excited about the opportunities that lie ahead in the ever-evolving field of web development and am eager to contribute my skills and creativity to innovative projects.</p>
        </div>
        </div>
        </OnScrollTextReveal>
    )
}

export default About;