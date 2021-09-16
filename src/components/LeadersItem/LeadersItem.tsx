import React, {FC} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ILeader} from 'redux/leaders/interfaces/index';
import LeaderImg from 'images/leader.png';
import PencilImg from 'images/pencil.png';
import styles from './LeadersItem.module.scss';

enum sortVariant {
  green,
  yellow,
  red,
}

type LeadersItemProps = {
  leaders: ILeader[];
  editLeader: (param: ILeader) => void;
};

const LeadersItem: FC<LeadersItemProps> = ({leaders, editLeader}: LeadersItemProps) => (
  <div className={styles.leadersItem}>
    {!!leaders.length &&
      leaders.map((leader) => (
        <li key={uuidv4()} className={styles.leadersItem__item}>
          <img className={styles.leadersItem__img} src={LeaderImg} alt="leader" />
          <p className={styles.leaderItem__score}>{leader.score}</p>
          <p className={styles.leaderItem__name}>{leader.name}</p>
          <div>{leader.change === 0 ? 'No Change' : `${leader.change} place`}</div>
          <button className={styles.leadersItem__btnEdit} onClick={() => editLeader(leader)}>
            <img src={PencilImg} alt="pencil" />
          </button>
        </li>
      ))}
  </div>
);

export default LeadersItem;
