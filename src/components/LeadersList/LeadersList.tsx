import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ILeader} from '../../redux/leaders/interfaces/index';
import styles from './LeadersList.module.scss';

const LeadersList = () => {
  const dispatch = useDispatch();
  const [leader, setLeader] = useState<ILeader>({name: '', rank: 0, score: 0});

  return (
    <div className={styles.leaderList}>
      <h2 className={styles.leaderList__title}>Leaders table for this period</h2>
      <button type="button" className={styles.leaderList__button}>
        + Add new score
      </button>
    </div>
  );
};

export default LeadersList;
