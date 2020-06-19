import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useWheel } from 'react-use-gesture';

import styles from './About.module.css';
import AbsoluteWrapper from '../../hoc/AbsoluteWrapper';
import Footer from '../Footer/Footer';
import { withRouter } from 'react-router-dom';

const About = ({ history }) => {
    const [firstProps, setFirst] = useSpring(() => ({ y: 0 }));
    const [secondProps, setSecond] = useSpring(() => ({ y: 0 }));

    const bind = useWheel(({ direction: [yDir], distance, wheeling }) => {
        if (yDir > 0 && distance > window.innerHeight / 20 && wheeling) {
            setFirst({ y: - window.innerHeight});
            setSecond({ y: - window.innerHeight });
        } else if (yDir < 0 && distance > window.innerHeight / 20 && wheeling) {
            setFirst({ y: 0 });
            setSecond({ y: 0 });
        }
    });

    const click = () => {
        history.push('/projects');
    }

    return (
        <AbsoluteWrapper>
            <animated.div className={styles.About} {...bind()}>
                <animated.div className={styles.section} style={{
                    transform: firstProps.y.interpolate(y => `translate3d(0, ${y}px, 0)`)
                }}>
                    <h1>Education</h1>  
                    <p>I am the guy who is always eager to learn new things. I have had already a Bachelor degree in Material Processing Technology in Finland, however, with the passion in coding, I decided to change my major and start the new career.</p><br/>
                    <p>Now, I am studying as the second year at Information Technology programme at Metropolia University. I gained a lot about technology field through courses and projects operated by school and partner companies.</p><br/>
                    <p>In order to become a full-stack developer in the future, I also took an open course which offered by Helsinki university. The course gave me fundamental things which a full-stack developer needs and how an application is built from end-to-end.</p><br/>
                    <p>I also got some achievements during my high school. During the National Olympiad of Physics in my country, I got the third prize. That was a small prize but somehow makes me <span>proud.</span></p>
                </animated.div>
                <animated.div className={styles.section}style={{
                    transform: secondProps.y.interpolate(y => `translate3d(0, ${y}px, 0)`)
                }}>
                    <h1>Experience</h1>
                    <p>I have worked as Fullstack developer at Globuzzer. I was responsible to build the front end and back end of very first new module Skillscanner application. That was great experience to me when I have been training and working with lots of technology and it taught me how to teamwork and communicate in professional working environment.</p><br/>
        
                    <p>Before working for Globuzzer, I was a freelancer. This period helps me improve my personal skills and technical skill as well. I learnt time management skills, how to solve skills independently and working under pressure a lot.</p><br/>
                    
                    <p>Besides, I also created some applications in my free time as a hobby. You could have a look at those <span onClick={click} style={{ textDecoration: 'underline', cursor: 'pointer' }}>here</span></p><br/>
                </animated.div>
                <Footer />
            </animated.div> 
        </AbsoluteWrapper>
    )
};

export default withRouter(About);
