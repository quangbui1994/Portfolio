import React from 'react';
import { Link } from 'react-router-dom';
import { Trail, animated } from 'react-spring/renderprops';
import { config } from 'react-spring';

import './Home.css';
import AbsoluteWrapper from '../../hoc/AbsoluteWrapper';
import Footer from '../Footer/Footer';

class Home extends React.Component {
    state = {
        list: [
            { name: 'About me', to: '/about', key: 0 }, 
            { name: 'Projects', to: '/projects', key: 1 }, 
            { name: 'Projects', to: '/projects', key: 2 }
        ],
        toggle: true
    }

    componentDidMount() {
        setTimeout(() => this.toggle(), 500);
    }

    toggle = () => this.setState(state => ({...this.state, toggle: !state.toggle}))

    render() {
        const { list, toggle } = this.state;
        return (
            <AbsoluteWrapper>
                <div className="Home">
                    <h1>Here is my portfolio</h1>
                    <h2>A newbie developer with desginer's heart</h2>
                    <div className="mainNav" onClick={this.toggle}>
                        <Trail
                            config={ config.stiff }
                            native
                            reverse={toggle}
                            initial={null}
                            items={list}
                            keys={item => item.key}
                            to={{ opacity: toggle ? 0 : 1, y: toggle ? -60 : 0 }}>
                            {item => ({ opacity, y }) => (
                                <animated.div
                                    className="mainNav__item"
                                    style={{
                                    opacity,
                                    transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                                    }}>
                                    <Link to={item.to} onClick={this.toggle}>{item.name}</Link>
                                </animated.div>
                            )}
                        </Trail>
                    </div>
                    <Footer/>
                </div>
            </AbsoluteWrapper>
        )
    }
};

export default Home;