import React from 'react';

import styles from './SkillBox.module.css';

const SkillBox = ({ text }) => (
    <div className={styles.SkillBox}>{text}</div>
);

export default SkillBox;