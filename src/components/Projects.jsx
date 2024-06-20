import React from "react";
import weatherImage from "../images/Weather app.png"
import todoList from "../images/To do list.png"
import OnScrollTextReveal from "./TextReveal";

function Projects() {
    return (
        <div className="projects" id="Projects">
            <OnScrollTextReveal>
            <h3>Projects. </h3>
            <div className="grid"> 
            <div className="project-card">
                <div className="card">
                <img src={weatherImage} alt="project" />
                <p>Developed a weather application using React that provides current weather information and forecasts for cities worldwide. Integrated the OpenWeather API to fetch real-time weather data such as temperature, humidity, wind speed, and weather conditions. Implemented user-friendly features like search functionality to retrieve weather information for specific locations and dynamic backgrounds that change based on the weather conditions.</p>
                <p>Key Features:<br/>
                 1. Displayed current weather information for selected cities, including temperature, humidity, wind speed, and weather conditions.<br/>
                 2. Implemented search functionality to retrieve weather information for specific cities.<br/>
                 3. Utilized dynamic backgrounds that change based on the weather conditions to enhance user experience.</p>
                <div className="button-container">
                <a href="https://github.com/shivashankar29/weather-app" className="btn" target="blank">Code</a>
                <a href="https://jovial-eclair-5fe0a7.netlify.app/" className="btn" target="blank">Live</a>
                </div>
                </div>
            </div>
            <div className="project-card">
                <div className="card">
                <img src={todoList} alt="project" />
                <p>Developed a dynamic and user-friendly to-do list application using HTML, CSS, and JavaScript. The application allows users to manage their tasks efficiently by adding, editing, and deleting items. Implemented features for marking tasks as complete and filtering tasks based on their status </p>
                <p>Key Features:<br/>
                1. Add Tasks:Users can add new tasks to their to-do list.<br/>
                2. Edit Tasks: Users can edit existing tasks to update their content.<br/>
                3. Delete Tasks: Users can remove tasks from the list.<br/>
                4. Mark as Complete: Users can mark tasks as complete, which visually distinguishes them from pending tasks.<br/>
                5. Local Storage: The application saves tasks in the browser's local storage, ensuring data persistence across sessions.</p>
                <div className="button-container">
                <a href="https://github.com/shivashankar29/To-Do-List-Project"className="btn" target="blank">Code</a>
                <a href="https://shivashankar29.github.io/To-Do-List-Project/"className="btn" target="blank">Live</a>
                </div>
                </div>
            </div>
            </div>
            </OnScrollTextReveal>
        </div>
    )
}

export default Projects;