import React from 'react';
import { animated, userSprings, useSprings } from 'react-spring';
import clamp from 'lodash-es/clamp';
import styles from './DragableGallery.module.css';
import { useDrag } from 'react-use-gesture';
import { useRef } from 'react';

// const pages = [
//     'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// ];

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