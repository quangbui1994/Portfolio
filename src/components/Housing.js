import React, { Component } from 'react';
import Application from './Application/Application';
import Image1 from '../assets/img/housing/image1.jpg';
import Image2 from '../assets/img/housing/image2.jpg';
import Image3 from '../assets/img/housing/image3.jpg';
import Image4 from '../assets/img/housing/image4.jpg';
import Image5 from '../assets/img/housing/image5.jpg';

class HousingApp extends Component {
    state = {
        name: 'Housing App',
        description: 'The landing page written by React and CSS',
        paragraph: ['The housing landing page is coded by React and CSS. It provides bunches of pictures about housing decoration. It is planned to be built as full application offering users accommodations'],
        technologies: ['React', 'CSS', 'HTML'],
        resources: {
            website: 'https://housing-landing-page.netlify.app/',
            github: 'https://github.com/quangbui1994/Housing-landing-page'
        },
        image: [Image1, Image2, Image3, Image4, Image5]
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

export default HousingApp;