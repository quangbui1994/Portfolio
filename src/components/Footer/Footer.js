import React from 'react';

import styles from './Footer.module.css';
import { ReactComponent as Facebook} from '../../assets/icons/logo-facebook.svg';
import { ReactComponent as Github} from '../../assets/icons/logo-github.svg';
import { ReactComponent as Linkedin} from '../../assets/icons/logo-linkedin.svg';

const Footer = () => (
    <div className={styles.Footer}>
        <a href="https://www.facebook.com/phuquang.bui"><Facebook className={styles.svg}/></a>
        <a href="https://github.com/quangbui1994"><Github className={styles.svg}/></a> 
        <a href="https://www.linkedin.com/in/quang-bui-244633135/"><Linkedin className={styles.svg}/></a>
        <div className={styles.copyright}>Quang Bui portfolio. All rights reserved</div> 
    </div>
);

export default Footer;