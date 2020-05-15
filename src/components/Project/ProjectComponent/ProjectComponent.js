import React from 'react';
import { Trail, animated } from 'react-spring/renderprops';
import { config } from 'react-spring';
import { withRouter } from 'react-router';

import './ProjectComponent.css';

class ProjectComponent extends React.Component {
    state = {
        showModal: false
    }

    onHoverHandler = () => {
        this.setState(state => ({ showModal: !state.showModal }));
    }

    exitHoverHandler = () => {
        this.setState(state => ({ showModal: !state.showModal }));
    }

    viewProjectHandler = name => {
        this.props.history.push(`/projects/${name}`);
    }

    render() {
        const { showModal } = this.state;
        const { skillsets, imgSrc, name } = this.props;
        return (
            <div className="slide-wrapper" onMouseLeave={this.exitHoverHandler} onMouseEnter={this.onHoverHandler}>
                <div className="slide-modal">
                    <Trail 
                        config={config.wobbly}
                        reverse={showModal}
                        native
                        initial={null}
                        keys={item => item}
                        items={skillsets}
                        to={{ opacity: showModal ? 1 : 0, y: showModal ? 100 : 0 }}>
                        {item => ({ opacity, y }) => (
                            <animated.div 
                                className="SkillBox" 
                                style={{ opacity, transform: y.interpolate(y => `translate3d(0,${y}%,0)`), }}>
                                {item}
                            </animated.div>
                        )}  
                    </Trail>
                    <button onClick={() => this.viewProjectHandler(name)} className="slide-modal__button">View website</button>
                </div>
                
                <img src={imgSrc} alt={name}/>
            </div>  
        )
    }
};

export default withRouter(ProjectComponent);