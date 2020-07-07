import React, { Component } from 'react';
import Application from './Application/Application';
import Image1 from '../assets/img/music/image1.jpg';
import Image2 from '../assets/img/music/image2.jpg';
import Image3 from '../assets/img/music/image3.jpg';

class MusicApp extends Component {
    state = {
        name: 'Music App',
        description: 'The application written by TypeScript running on NodeJS allows ones to stream music',
        paragraph: ['Music App offers you various styles of music. People could log in and do a quick search to figure out their favorite musics and enjoy them.', 'The App is implemented based on React and TypeScript. Meanwhile, the back end is running on NodeJS with MongoDB.'],
        technologies: ['React', 'TypeScript', 'Nodejs', 'MongoDb'],
        resources: {
            website: 'https://quang-music-app.herokuapp.com/',
            github: 'https://github.com/quangbui1994/music-app'
        },
        image: [Image1, Image2, Image3]
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

export default MusicApp;