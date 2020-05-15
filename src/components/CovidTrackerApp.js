import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/CovidTracker.jpg';

class CovidTrackerApp extends Component {
    state = {
        name: 'Covid Tracker App',
        description: 'The real-time tracker built to help people follow the latest information about Covid19 cases in the world',
        paragraph: ['Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.', 'At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.'],
        technologies: ['React', 'ChartJS', 'MaterialUI'],
        resources: {
            website: 'https://covid19-autotrack.netlify.app/',
            github: 'https://github.com/quangbui1994/Covid-Tracker'
        },
        image: Image
    }
    render() {
        const { name, image, description, paragraph, technologies, resources } = this.state;
        return (
            <Application
                image={image} 
                name={name}
                description={description}
                paragraph={paragraph}
                technologies={technologies}
                resources={resources}/>
        )
    }
}

export default CovidTrackerApp;