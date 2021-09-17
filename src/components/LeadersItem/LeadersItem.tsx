import React, {FC} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ILeader} from 'redux/leaders/interfaces/index';
import LeaderImg from 'images/leader.png';
import PencilImg from 'images/pencil.png';
import styles from './LeadersItem.module.scss';

type LeadersItemProps = {
  leader: ILeader;
  editLeader: (param: ILeader) => void;
};

const LeadersItem: FC<LeadersItemProps> = (props: LeadersItemProps) => {
  const {leader, editLeader} = props;
  return (
    <div className={styles.leadersItem}>
      <li key={uuidv4()} className={styles.leadersItem__item}>
        <img className={styles.leadersItem__img} src={LeaderImg} alt="leader" />
        <p className={styles.leadersItem__score}>{leader.score}</p>
        <p className={styles.leadersItem__name}>{leader.name}</p>
        <img className={styles.leadersItem__edit} src={PencilImg} alt="pencil" onClick={() => editLeader(leader)} />
      </li>
    </div>
  );
};

export default LeadersItem;
