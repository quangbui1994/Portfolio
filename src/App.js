import React, { useContext, lazy, Suspense } from 'react';
import { __RouterContext, Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import { Nav, Home, CovidTrackerApp, RestaurantApp, WeatherApp, FlappyBirdApp, SkillScannerApp, MusicApp, HousingApp } from './components';
import styles from './App.module.css';

//LAZY LOADS
const AboutLazy = import('./components/About/About');
const ProjectLazy = import('./components/Project/Project');
const About = lazy(() => AboutLazy);
const Project = lazy(() => ProjectLazy);

const loading = (<>Loading</>);

const App = () => {
  const { location } = useContext(__RouterContext);

  // SET ROUTING ANIMATION
  const transtions = useTransition(location, p => p.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'},
  });

  return (
    <div className={styles.container}>
      <Nav />
      <Suspense fallback={loading}>
      {transtions.map(({ item, key, props}) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" exact component={Project} />
            <Route path="/projects/weather-app" component={WeatherApp} />
            <Route path="/projects/restaurant-app" component={RestaurantApp} />
            <Route path="/projects/flappy-bird-app" component={FlappyBirdApp} />
            <Route path="/projects/covid-tracker" component={CovidTrackerApp} />
            <Route path="/projects/Skillscanner-app" component={SkillScannerApp} />
            <Route path="/projects/music-app" component={MusicApp} />
            <Route path="/projects/housing-app" component={HousingApp} />
          </Switch>  
        </animated.div>
      ))}
      </Suspense>
    </div>
  )
};

export default App;