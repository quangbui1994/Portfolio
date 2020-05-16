import React, { Component } from 'react';
import Application from './Application/Application';
import Image from '../assets/img/RestaurantApp.jpg';

class RestaurantApp extends Component {
    state = {
        name: 'Restaurant App',
        description: 'The serverless application using AWS services offer fast and delicious meals',
        paragraph: ['Restaurant App offers you various best fast food restaurants in Helsinki. People could log in and do a quick search to be served with great choices.', 'The App is implemented based on React and CSS framework MaterialUI. Meanwhile, the back end was built on top of Amazon Web Services. The API was launched on Lambda services which triggered immediately and only when clients make a search request. The database of users is saved to DynamoDB. The whole app using the IAM service and Cognito for authentication and authorization. I built this as my side project to start using AWS services simply to build serverless stack application.'],
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