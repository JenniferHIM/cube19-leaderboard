import React from 'react';
import styles from './Title.module.scss';

const Title = () => (
  <h1 className={styles.title}>
    Cube<span className={styles.title__part}>19</span>Leaderboard
  </h1>
);

export default Title;
