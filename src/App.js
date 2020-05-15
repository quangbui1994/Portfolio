import React, { useContext } from 'react';
import { __RouterContext, Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import { Home, Nav, CovidTrackerApp, RestaurantApp, WeatherApp, FlappyBirdApp, Project, About } from './components';
import './App.css';

const App = () => {
  const { location } = useContext(__RouterContext);

  // SET ROUTING ANIMATION
  const transtions = useTransition(location, p => p.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'},
  });

  return (
    <div className="App">
      <Nav />
      {transtions.map(({ item, key, props}) => (
        <animated.div key={key} style={props}>
          <Switch location={item} >
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" exact component={Project} />
            <Route path="/projects/weather-app" component={WeatherApp} />
            <Route path="/projects/restaurant-app" component={RestaurantApp} />
            <Route path="/projects/flappy-bird-app" component={FlappyBirdApp} />
            <Route path="/projects/covid-tracker" component={CovidTrackerApp} />
          </Switch>  
        </animated.div>
      ))}
    </div>
  )
};

export default App;