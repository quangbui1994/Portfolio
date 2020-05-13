import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Facebook} from '../../img/logo-facebook.svg';
import { ReactComponent as Github} from '../../img/logo-github.svg';
import { ReactComponent as Linkedin} from '../../img/logo-linkedin.svg';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className={styles.Footer}>
        <a href="https://www.facebook.com/phuquang.bui"><Facebook className={styles.svg}/></a>
        <a href="https://github.com/quangbui1994"><Github className={styles.svg}/></a> 
        <a href="https://www.linkedin.com/in/quang-bui-244633135/"><Linkedin className={styles.svg}/></a>
        <div className={styles.copyright}>Quang Bui portfolio. All rights reserved</div> 
    </div>
);

export default Footer;