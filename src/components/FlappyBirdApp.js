import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/FlappyBirdApp.jpg';

class FlappyBirdApp extends Component {
    state = {
        name: 'Flappy Bird App',
        description: 'The simple Flappy Bird game build on React based',
        paragraph: ['Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.', 'At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.'],
        technologies: ['React'],
        resources: {
            website: 'https://github.com/quangbui1994/Flappy-bird-react',
            github: 'https://github.com/quangbui1994/Flappy-bird-react'
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

export default FlappyBirdApp;