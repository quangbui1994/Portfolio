import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import './Project.css';
import WeatherApp from '../../assets/img/weather/image1.jpg';
import RestaurantApp from '../../assets/img/restaurant/image1.jpg';
import FlappyBirdApp from '../../assets/img/flappybird/image1.jpg';
import CovidTracker from '../../assets/img/covidtracker/image1.jpg';
import MusicApp from '../../assets/img/music/image1.jpg';
import SkillScannerApp from '../../assets/img/skillscanner/image1.jpg';
import AbsoluteWrapper from '../../hoc/AbsoluteWrapper';
import { Footer, ProjectComponent } from '../index';

const Project = () => {
    const projects = [
        {name: 'skillscanner-app', image: SkillScannerApp, skillsets: ['React', 'Firebase', 'Firestore']},
        {name: 'weather-app', image: WeatherApp, skillsets: ['React', 'NodeJS', 'MongoDB', 'Leaflet', 'Redux', 'Passport', 'Bootstrap']},
        {name: 'restaurant-app', image: RestaurantApp, skillsets: ['React', 'AWS', 'Cognito', 'DynamoDB', 'Lambda', 'MaterialUI']},
        {name: 'flappy-bird-app', image: FlappyBirdApp, skillsets: ['JavaScript', 'HTML', 'CSS']},
        {name: 'covid-tracker', image: CovidTracker, skillsets: ['React', 'ChartJS', 'MaterialUI']},
        {name: 'music-app', image: MusicApp, skillsets: ['React', 'TypeScript', 'NodeJS', 'MongoDB']},
    ]
    return (
        <AbsoluteWrapper>
            <div className="Project">
                <h1>Web Apps</h1>
                <h2>The application has been built among techniques inluding NodeJs, React, Mongo, Express, AWS and more. Please check it out to get details</h2>
                <Carousel 
                    showArrows={false}
                    emulateTouch
                    showStatus={false}
                    showThumbs={false}
                    autoPlay 
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
                <Footer />
            </div>
        </AbsoluteWrapper>
    )
};

export default Project;