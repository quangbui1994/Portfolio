import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import styles from './About.module.css';
import AbsoluteWrapper from '../../hoc/AbsoluteWrapper';
import Footer from '../Footer/Footer';

const About = () => {
    const firstRef = useRef();
    const secondRef = useRef();
    const lastLineRef = useRef();

    const [animate, set] = useState({
        first: true,
        second: false,
    });

    const propsFirst = useSpring({
        config: config.slow,
        opacity: animate.first ? 1 : 0,
        transform: animate.first ? 'translateY(0)' : 'translateY(20%)'
    })

    const propsSecond = useSpring({
        config: config.slow,
        opacity: animate.second ? 1 : 0,
        transform: animate.second ? 'translateY(0)' : 'translateY(20%)'
    })

    useEffect(() => {
        const topPosition = ref => ref.current.getBoundingClientRect().top;

        const firstPos = topPosition(firstRef);
        const secondPos = topPosition(secondRef);

        const onScroll = () => {
            const scrollPosition = window.innerHeight;
    
            if (firstPos < scrollPosition && secondPos > scrollPosition) {
                set(state => ({...state, first: true, second: false}));
            } else if (secondPos < scrollPosition && lastLineRef > 0) {
                set(state => ({...state, second: true}));
            } else if (lastLineRef < 0 && secondPos < scrollPosition) {
                set(state => ({...state, first: false, second: true}));
            } else if (firstPos < scrollPosition && secondPos < scrollPosition) {
                set(state => ({...state, first: false, second: true}));
            } 
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    })

    return (
        <AbsoluteWrapper>
            <div className={styles.About}>
                <animated.div style={propsFirst} className={styles.section} ref={firstRef}>
                    <h1>Education</h1>  
                    <p>They represent relative values of the gesture, in contrast with xy and da which are absolute values of your pointers. Relative values are handy as you usually use the transform style attribute to move your components, which itself is relative to the component natural position.
        
                    #The difference between the two
                    In React-use-gesture, we call gesture the act of the user initiating and terminating an interaction. movement expresses the gesture movement, while offset is the sum of all gesture movements on the same component. When you start dragging a component, movement is reset to [0,0], while offset keeps its previous value.
                    
                    In practical terms, movement is handy when your element returns back to its original position at the end of the gesture. Here is an example for offset, where the component stays where you left it:
                    They represent relative values of the gesture, in contrast with xy and da which are absolute values of your pointers. Relative values are handy as you usually use the transform style attribute to move your components, which itself is relative to the component natural position.
                    
                    #The difference between the two
                    In React-use-gesture, we call gesture the act of the user initiating and terminating an interaction. movement expresses the gesture movement, while offset is the sum of all gesture movements on the same component. When you start dragging a component, movement is reset to [0,0], while offset keeps its previous value.
                    
                    In practical terms, movement is handy when your element returns back to its original position at the end of the gesture. Here is an example for offset, where the component stays where you left it:
                    They represent relative values of the gesture, in contrast with xy and da which are absolute values of your pointers. Relative values are handy as you usually use the transform style attribute to move your components, which itself is relative to the component natural <span ref={lastLineRef}>position</span></p>
                    
                </animated.div>
                <animated.div style={propsSecond} className={styles.section} ref={secondRef}>
                    <h1>Experience</h1>
                    <p>They represent relative values of the gesture, in contrast with xy and da which are absolute values of your pointers. Relative values are handy as you usually use the transform style attribute to move your components, which itself is relative to the component natural position.
        
                    #The difference between the two
                    In React-use-gesture, we call gesture the act of the user initiating and terminating an interaction. movement expresses the gesture movement, while offset is the sum of all gesture movements on the same component. When you start dragging a component, movement is reset to [0,0], while offset keeps its previous value.
                    
                    In practical terms, movement is handy when your element returns back to its original position at the end of the gesture. Here is an example for offset, where the component stays where you left it:
                    They represent relative values of the gesture, in contrast with xy and da which are absolute values of your pointers. Relative values are handy as you usually use the transform style attribute to move your components, which itself is relative to the component natural position.</p>
                </animated.div>
                <Footer />
            </div> 
        </AbsoluteWrapper>
    )
};

export default About;