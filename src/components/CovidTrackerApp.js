import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/CovidTracker.jpg';

class CovidTrackerApp extends Component {
    state = {
        name: 'Covid Tracker App',
        description: 'The real-time tracker built to help people follow the latest information about Covid19 cases in the world',
        paragraph: ['Covid Tracker as its name tracks the Covid-19 cases in the world. It indicates number of infected, recovered cases and deaths. Moreover, ones could find these numbers for specific countries and regions. The chart implemented to visualize the epidemic curve.', 'The simple app is built with React and MaterialUI. The chart is provided from ChartJS library.'],
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