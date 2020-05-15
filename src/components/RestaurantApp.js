import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/RestaurantApp.jpg';

class RestaurantApp extends Component {
    state = {
        name: 'Restaurant App',
        description: 'The serverless application using AWS services offer fast and delicious meals',
        paragraph: ['Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.', 'At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.'],
        technologies: ['React', 'AWS', 'Cognito', 'DynamoDB', 'Lambda', 'MaterialUI'],
        resources: {
            website: 'https://restaurant-serverless.netlify.app/',
            github: 'https://github.com/quangbui1994/restaurant-serverless-client'
        },
        image: Image
    }
    render() {
        const { name, image, description, paragraph, technologies, resources } = this.state;
        return (
            <Application 
                name={name}
                image={image}
                description={description}
                paragraph={paragraph}
                technologies={technologies}
                resources={resources}/>
        )
    }
}

export default RestaurantApp;