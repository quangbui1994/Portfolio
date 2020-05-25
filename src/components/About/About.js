import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import styles from './About.module.css';
import AbsoluteWrapper from '../../hoc/AbsoluteWrapper';
import Footer from '../Footer/Footer';
import { Link, withRouter } from 'react-router-dom';

const About = ({ history }) => {
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

    const onClick = () => {
        window.scrollTo(0,0);
        history.push('/projects');
    }

    useEffect(() => {
        const topPosition = ref => ref.current.getBoundingClientRect().top;

        const firstPos = topPosition(firstRef);
        const secondPos = topPosition(secondRef);

        const onScroll = () => {
            const scrollPosition = window.innerHeight;
            console.log(secondPos, scrollPosition);
            if (secondPos < scrollPosition) {
                set(state => ({...state, second: true}));
            } else {
                set(state => ({...state, second: false}))
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
                    <p>I am the guy who is always eager to learn new things. I have had already a Bachelor degree in Material Processing Technology in Finland, however, with the passion in coding, I decided to change my major and start the new career.</p><br/>
                    <p>Now, I am studying as the second year at Information Technology programme at Metropolia University. I gained a lot about technology field through courses and projects operated by school and partner companies.</p><br/>
                    <p>In order to become a full-stack developer in the future, I also took an open course which offered by Helsinki university. The course gave me fundamental things which a full-stack developer needs and how an application is built from end-to-end.</p><br/>
                    <p>I also got some achievements during my high school. During the National Olympiad of Physics in my country, I got the third prize. That was a small prize but somehow makes me <span ref={lastLineRef}>proud.</span></p>
                </animated.div>
                <animated.div style={propsSecond} className={styles.section} ref={secondRef}>
                    <h1>Experience</h1>
                    <p>I have worked as Fullstack developer at Globuzzer. I was responsible to build the front end and back end of very first new module Skillscanner application. That was great experience to me when I have been training and working with lots of technology and it taught me how to teamwork and communicate in professional working environment.</p><br/>
        
                    <p>Before working for Globuzzer, I was a freelancer. This period helps me improve my personal skills and technical skill as well. I learnt time management skills, how to solve skills independently and working under pressure a lot.</p><br/>
                    
                    <p>Besides, I also created some applications in my free time as a hobby. You could have a look at those <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={onClick} >here</span></p><br/>
                </animated.div>
                <Footer />
            </div> 
        </AbsoluteWrapper>
    )
};

export default withRouter(About);
