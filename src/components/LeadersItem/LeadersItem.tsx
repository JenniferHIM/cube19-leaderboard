import React, {FC} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ILeader} from 'redux/leaders/interfaces/index';
import LeaderImg from 'images/leader.png';
import PencilImg from 'images/pencil.png';
import styles from './LeadersItem.module.scss';

type LeadersItemProps = {
  leaders: ILeader[];
};

const LeadersItem: FC<LeadersItemProps> = ({leaders}: LeadersItemProps) => (
  <div className={styles.leadersItem}>
    {!!leaders.length &&
      leaders.map((leader) => (
        <li key={uuidv4()} className={styles.leadersItem__item}>
          <img className={styles.leadersItem__img} src={LeaderImg} alt="leader" />
          <p className={styles.leaderItem__score}>{leader.score}</p>
          <p className={styles.leaderItem__name}>{leader.name}</p>
          <img src={PencilImg} alt="pencil" />
        </li>
      ))}
  </div>
);

export default LeadersItem;
