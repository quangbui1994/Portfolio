import React, { Component } from 'react';
import Application from './Application/Application';
import Image1 from '../assets/img/skillscanner/image1.jpg';
import Image2 from '../assets/img/skillscanner/image2.jpg';
import Image3 from '../assets/img/skillscanner/image3.jpg';

class SkillScannerApp extends Component {
    state = {
        name: 'SkillScanner App',
        description: 'A module of Globuzzer social network which connects people in Nordics so people could get jobs easier',
        paragraph: ['Skillscanner is a new module of Globuzzer social network. It connects English speaking talents with job opportunities around the Nordics. It also offers employers to post their jobs and seek the best matched candidates.', 'I worked at this project as Fullstack developer. My responsibilities were created the front end of app based on the sketchs of design team. After that we communicated directly with clients to get feedback and made changes. The backend of application was served on the top of Firebase services. All of the data is stored in Firestore, a real-time database hosted in cloud, integrated with Storage, a service allows ones to store the videos and images of users. The authentication is implemented with the support of Firebase authentication which offers a lot of choices, both OAuth and traditional authentications.'],
        technologies: ['React', 'Firebase', 'Firestore'],
        resources: {
            website: 'https://skillscanner.globuzzer.com/',
        },
        image: [Image1, Image2, Image3]
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

export default SkillScannerApp;