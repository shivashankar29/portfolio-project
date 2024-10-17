import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import Rlib from "../images/react.png";
import jquery from "../images/jquery.png";
import bootstrap from "../images/bootstrap.png";
import git from "../images/git.png";
import { UilGithub } from '@iconscout/react-unicons'
import vscode from "../images/vs code.png";
import OnScrollTextReveal from "./TextReveal";

function Techstack() {
    return (
        <div className="tech">
            <OnScrollTextReveal>
            <h3>Tech <span>Stack</span></h3>
            <div className="grid-container">
            <img src={html} alt="logo" />
            <img src={css} alt="logo" />
            <img src={javascript} alt="logo" />
            <img src={Rlib} alt="logo" />
            <img src={jquery} alt="logo" />
            <img src={bootstrap} alt="logo" />
            <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" className="java" alt="Java" />
            <UilGithub className="tech-github"/>
            <img src={vscode} alt="logo" />
            </div>
            </OnScrollTextReveal>
        </div>
    )
}

export default Techstack;
