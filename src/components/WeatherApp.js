import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/WeatherApp.jpg';

class WeatherApp extends Component {
    state = {
        name: 'Weather App',
        description: 'The weather forecast application powered by React',
        paragraph: ['The Weather App is a React web application built to help people get the weather situation at all cities in the world. The registered users could even save their desired cities to quickly update every time logging in. Moreover, the weather map which integrated with the app allow people to quickly get information by just clicking anywhere with highly precise.', 'I have used React and Redux to build the front-end of the app, back end was created with NodeJs and MongoDB is utilized to store database. The OAuth authentication has been integrated based on PassportJs along with traditional authentication. The Leaflet library also used to implement the map.'],
        technologies: ['React', 'NodeJS', 'MongoDB', 'Leaflet', 'Redux', 'Passport', 'Bootstrap'],
        resources: {
            website: 'https://quang-weather-app.herokuapp.com/',
            github: 'https://github.com/quangbui1994/WeatherReactApp'
        },
        image: Image,
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

export default WeatherApp;