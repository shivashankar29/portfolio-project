import React, { useEffect, useRef } from "react";
import OnScrollTextReveal from "./TextReveal";

function Hero() {

    
    return (
        <OnScrollTextReveal>
            
        <div className="hero" id="Home">
        <h1>Hi, I'm <span>Shiva Shankar</span>.</h1>
        <p>I'm a Front End Developer</p>
        
        </div>
        </OnScrollTextReveal>
    )
}

export default Hero;