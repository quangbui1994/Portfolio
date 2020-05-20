import React, { useRef, useEffect, useState } from 'react';
import { useSpring, useTransition, useChain, animated, config } from 'react-spring';
import { withRouter } from 'react-router';

import styles from './Nav.module.css';

const Nav = ({ history }) => {
    const [hideNav, setHideNav] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // SET SCROLL EVENT LISTENER
    const scrollHandler = () => {
        if (window.pageYOffset > scrollPos) {
            setHideNav(true);
        } else {
            setHideNav(false);
        }
        setScrollPos(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    });

    //LOCK SCREEN WHEN MODAL OPENS
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [showModal]);

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

    //MODAL FUNCTIONS
    const showModalHandler = () => {
        setShowModal(!showModal);
    };

    const routingHandler = link => {
        setTimeout(() => history.push(link), 1500);
        setTimeout(() => window.scrollTo(0,0), 1000);
        showModalHandler();
    };

    return (
        <div className={styles.Nav}>
            <input type="checkbox" id="checkbox" checked={showModal} onChange={showModalHandler}/>
            <label style={{ display: hideNav ? 'none' : 'flex' }} htmlFor="checkbox" className={styles.checkBoxLabel}><div></div></label>

            <animated.div className={styles.modal} style={props}>
                {transitionModal.map(({ item, key, props }) => (
                <animated.div className={styles.modal__item} key={key} style={props}>
                    <div onClick={() => routingHandler(item.to)} to={item.to}>{item.name}</div>
                </animated.div>
                ))}
            </animated.div>
        </div>
    )
}

export default withRouter(Nav);
