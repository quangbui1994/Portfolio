import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Project.css';
import WeatherApp from '../../assets/img/WeatherApp.jpg';
import RestaurantApp from '../../assets/img/RestaurantApp.jpg';
import FlappyBirdApp from '../../assets/img/FlappyBirdApp.jpg';
import CovidTracker from '../../assets/img/CovidTracker.jpg';
import ProjectComponent from './ProjectComponent/ProjectComponent';

const Project = () => {
    const projects = [
        {name: 'weather-app', image: WeatherApp, skillsets: []},
        {name: 'restaurant-app', image: RestaurantApp, skillsets: []},
        {name: 'flappy-bird-app', image: FlappyBirdApp, skillsets: []},
        {name: 'covid-tracker', image: CovidTracker, skillsets: []},
    ]
    return (
        <div className="Project">
            <h1>Web Apps</h1>
            <h2>The application has been built among techniques inluding NodeJs, React, Mongo, Express, AWS and more. Please check it out to get details</h2>
            <Carousel 
                showArrows={false}
                emulateTouch
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                // autoPlay 
                stopOnHover 
                interval={2000} 
                transitionTime={1000} 
                className="wrapper">
                    {
                        projects.map(project => 
                            <ProjectComponent 
                                name={project.name} 
                                key={project.name} 
                                imgSrc={project.image}
                                skillsets={project.skillsets}/>)
                    }
            </Carousel> 
        </div>
    )
};

export default Project;