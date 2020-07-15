import React, { Component } from 'react';
import Application from './Application/Application';
import Image2 from '../assets/img/flappybird/image2.jpg';
import Image3 from '../assets/img/flappybird/image3.jpg';

class FlappyBirdApp extends Component {
    state = {
        name: 'Flappy Bird App',
        description: 'The simple Flappy Bird game build on JavaScript based',
        paragraph: ['A simple mobile application rebuilt with vanilla JavaScript.', 'Instead of using game engine, I built the game with JavaScript, HTML and CSS. It might not give the best experience for users but I hope it could somehow enjoy people.'],
        technologies: ['JavaScript', 'HTML', 'CSS'],
        resources: {
            website: 'https://flapy-bird.netlify.app/',
            github: 'https://github.com/quangbui1994/Flappy-bird-react'
        },
        image: [Image3, Image2]
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