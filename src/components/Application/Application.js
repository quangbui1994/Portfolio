import React, { useState, useEffect } from 'react';
import styles from './Application.module.css';
import AbsoluteWrapper from '../../hoc/AbsoluteWrapper';
import Footer from '../Footer/Footer';

const Application = ({ name, image, description, paragraph, technologies, resources }) => {
    return (
        <AbsoluteWrapper>
            <div className={styles.Application}>
                <h1>{name}</h1>
                <h2>{description}</h2>
                <button><a target="blank" href={resources.website}>Visit the website</a></button>
                <div className={styles.heroImageWrapper}>
                    <div className={styles.heroImage}><img src={image} alt={`${name}`}/></div>
                </div>
                <section className={styles.about}>
                    <h3>Description</h3>
                    {paragraph.map((p, i) => <><p key={i}>{p}</p><br/></>)}
                </section>
                <section className={styles.technology}>
                    <h3>Technologies</h3>
                    <ul>
                        {technologies.map((technology, i) => <li><p>{technology}</p></li>)}
                    </ul>
                </section>
                <section className={styles.resources}>
                    <h3>Resources</h3>
                    <p>Visit the web app at: <a target="blank" className={styles.resource__link} href={resources.website}>{resources.website}</a></p>
                    <p>Github resource: <a target="blank" className={styles.resource__link} href={resources.github}>{resources.github}</a></p>
                </section>
                <Footer />
            </div>
        </AbsoluteWrapper>
    )
};

export default Application;