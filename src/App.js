import React, { useContext, useState, useRef } from 'react';
import { __RouterContext, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import { animated, useTransition, useSpring, useChain, config } from 'react-spring';
import WeatherApp from './components/WeatherApp';
import RestaurantApp from './components/RestaurantApp';
import FlappyBirdApp from './components/FlappyBirdApp';
import CovidTrackerApp from './components/CovidTrackerApp';
import Nav from './components/Nav/Nav';

const App = ({ history }) => {
  const { location } = useContext(__RouterContext);
  const [showModal, setShowModal] = useState(false);

  console.log('App rerender');

  // SET ROUTING ANIMATION
  const transtions = useTransition(location, p => p.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'},
  });

  // SET NAVIGATE MODAL ANIMATION
  const springRef = useRef();
  const transitionModalRef = useRef();

  const props = useSpring({
    ref: springRef,
    opacity: showModal ? 1 : 0, transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
  });

  const items = [
    {name: 'Home', to: '/'},
    {name: 'About me', to: '/about'},
    {name: 'Projects', to: '/projects'},
  ];

  const transitionModal = useTransition(showModal ? items : [], p => p.to, {
    ref: transitionModalRef,
    config: config.gentle,
    trail: 300 / items.length,
    from: { opacity: 0, transform: 'translateX(-50%)'},
    enter: { opacity: 1, transform: 'translateX(0)'},
    leave: { opacity: 0, transform: 'translateX(-50%)'},
  });

  useChain(showModal ? [springRef, transitionModalRef] : [transitionModalRef, springRef], [0, showModal ? .5 : 1]);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const routingHandler = link => {
    setTimeout(() => history.push(link), 1500);
    showModalHandler();
  }

  return (
    <div className="App" style={{ overflow: showModal ? 'hidden' : 'visible'}}>
      <Nav showModalHandler={showModalHandler} checked={showModal}/>

      <animated.div className="modal" style={props}>
        {transitionModal.map(({ item, key, props }) => (
          <animated.div className="modal--item" key={key} style={props}>
            <div onClick={() => routingHandler(item.to)} to={item.to}>{item.name}</div>
          </animated.div>
        ))}
      </animated.div>
      
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

export default withRouter(App);