import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/FlappyBirdApp.jpg';

class FlappyBirdApp extends Component {
    state = {
        name: 'Flappy Bird App',
        description: 'The simple Flappy Bird game build on React based',
        paragraph: ['A simple mobile application rebuilt with React technology.', 'Instead of using game engine, I built the game with React library. It might not give the best experience for users but I hope it could somehow enjoy people.'],
        technologies: ['React'],
        resources: {
            website: 'https://flapy-bird.netlify.app/',
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