import React from 'react';
import { useTrail, animated } from 'react-spring';
import styles from './AbsoluteWrapper.module.css'

const style = {
    position: 'absolute',
    width: '100%',
    minHeight: '100vh',
    zIndex: 10
}

const AbsoluteWrapper = ({children}) => {
    const fast = { tension: 800, friction: 100 };
    const slow = { mass: 10, tension: 200, friction: 50 };
    const [trail, set] = useTrail(3, () => ({ xy: [0,0], config: i => i === 0 ? fast : slow }));

    const mouse = e => {
        const { clientX, clientY } = e;
        set({ xy: [clientX, clientY] });
    };

    const trans = (x, y) => `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    return (
        <div onMouseMove={mouse}>
            <div style={style}>
                {children}
            </div>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div className={styles.mouseContainer}>
                {trail.map(({ xy }, i) => (
                    <animated.div className={styles.mouse} key={i} style={{
                        transform: xy.interpolate(trans),
                    }}></animated.div>
                ))}
            </div>
        </div>
    )
};

export default AbsoluteWrapper;