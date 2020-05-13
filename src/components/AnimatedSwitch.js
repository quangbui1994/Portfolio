import React, { useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import './AnimatedSwitch.css';
import { useDidUpdateEffect } from '../hooks/hooksLib';
import { useState } from 'react';

export const AnimatedSwitch = withRouter(({ location, history, state }) => {
    const currentScreen = location.pathname == '/' ? 0 : 1;
    const previousScreen = state ? 1 : 0;
    const animationClassNames = currentScreen > previousScreen ? 'slide-forward' : 'slide-backward';

    // const [locationNow, setLocation] = useState(location);
    // console.log(locationNow)

    // useDidUpdateEffect(locationNow => {
    //     history.push({ state: { previousScreen: locationNow.pathname } });
    // }, [location.pathname]);

    return (
        <TransitionGroup childFactory={child => 
            React.cloneElement(child, {
                classNames: animationClassNames
            })
        }>
            <CSSTransition key={location.key} classNames={animationClassNames} timeout={500}>
                <Switch location={location} >
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Project} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
});