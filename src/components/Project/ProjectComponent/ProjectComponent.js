import React from 'react';
import './ProjectComponent.css';


const ProjectComponent = ({ imgSrc, name, skillsets }) => {
    return (
        <div className="slide-wrapper">
            <div className="modal"></div>
            <img src={imgSrc} alt={name}/>
        </div>  
    )
};

export default ProjectComponent;