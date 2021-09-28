import {useSelector} from 'react-redux';
import {ILeader} from 'redux/leaders/interfaces';
import styles from 'components/HighScore/HighScore.module.scss';
import leaderImg from '../../images/leader.png';
import businessPeople from '../../images/business-people.png';

const HighScore = () => (
  <div className={styles.wrapper}>
    <div className={styles.highScore}>
      <h2 className={styles.highScore__title}>All time Highest Scorers</h2>
      <ul className={styles.highScore__list}>
        {/* {leaders.map((leader) => ( */}
        <li className={styles.highScore__item}>
          <img className={styles.highScore__item__img} src={leaderImg} alt="leader img" />
          <h3 className={styles.highScore__item__title}>Alison</h3>
          <p className={styles.highScore__item__score}>500</p>
        </li>
        {/* ))} */}
      </ul>
    </div>
    <div className={styles.highScore__background}>
      <img className={styles.highScore__image} src={businessPeople} alt="people bcg" />
    </div>
  </div>
);

export default HighScore;
