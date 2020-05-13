import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { AnimatedSwitch } from './components/AnimatedSwitch';

const App = () => (
  <div className="App">
    <AnimatedSwitch />
    <Footer />
  </div>
);

export default App;