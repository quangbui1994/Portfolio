import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

const Home = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([...list, { name: 'About me', to: '/about' }, { name: 'Projects', to: '/projects' }, { name: 'Projects', to: '/projects' }]);
    }, []);

    let delay = -300;
    const timeout = 1000;

    return (
        <div className="Home">
            <h1>Here is my portfolio</h1>
            <h2>A newbie developer with desginer's heart</h2>
                <TransitionGroup className="mainNav">
                    {
                        list.map((item, i) => {
                            delay += timeout / 3;
                            return (
                                <CSSTransition
                                    mountOnEnter
                                    unmountOnExit
                                    timeout={timeout}
                                    in={list.length}
                                    classNames="mainNavItem">
                                    <div className="mainNav__item" style={{ transitionDelay: `${delay}ms` }}>
                                        <Link to={item.to}>{item.name}</Link>
                                    </div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
        </div>
    )
};

export default Home;