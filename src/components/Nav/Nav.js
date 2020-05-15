import React from 'react';

import styles from './Nav.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Nav = ({ showModalHandler, checked }) => {
    const [hideNav, setHideNav] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

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

    return (
        <div className={styles.Nav} style={{display: hideNav ? 'none' : 'block'}}>
            <input type="checkbox" id="checkbox" checked={checked} onChange={showModalHandler}/>
            <label htmlFor="checkbox" className={styles.checkBoxLabel}><div></div></label>
        </div>
    )
}

export default Nav;
