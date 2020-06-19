import React from 'react';
import { animated, useSprings } from 'react-spring';
import clamp from 'lodash-es/clamp';
import styles from './DragableGallery.module.css';
import { useDrag } from 'react-use-gesture';
import { useRef } from 'react';

const DragableGallery = ({ image }) => {
    const index = useRef(0);
    const [props, set] = useSprings(image.length, i => ({ x: i * window.innerWidth * 50 / 100, sc: 1, display: 'block' }));

    const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (down && distance > window.innerHeight / 1.5) {
            cancel(index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, image.length - 1));
        }
        set(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' };
            const x = (i - index.current) * window.innerWidth * 50 / 100 + (down ? mx : 0);
            const sc = down ? 1 - distance / (window.innerWidth * 50 / 100) / 2 : 1;
            return { x, sc, display: 'block' };
        });
    });

    return (
        <div>
            {props.map(({ x, sc, display }, i) => (
                <animated.div {...bind()} key={i} className={styles.container} style={{ display, transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`) }}>
                    <animated.div className={styles.item} style={{
                        backgroundImage: `url(${image[i]})`,
                        transform: sc.interpolate(s => `scale(${s})`)
                    }}/>
                </animated.div>
            ))}
        </div>
    );
};

export default DragableGallery;