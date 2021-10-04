import {FC} from 'react';
import {ILeader} from 'redux/leaders/interfaces/index';
import LeaderImg from 'images/leader.png';
import PencilImg from 'images/pencil.png';
import cn from 'classnames';
import {v4 as uuidv4} from 'uuid';
import styles from './LeadersItem.module.scss';

type LeadersItemProps = {
  leader: ILeader;
  editLeader: (param: ILeader) => void;
};

const listStyles = {
  green: 'leadersItem__green',
  yellow: 'leadersItem__yellow',
  red: 'leadersItem__red',
};

const LeadersItem: FC<LeadersItemProps> = (props: LeadersItemProps) => {
  const {leader, editLeader} = props;
  return (
    <div className={styles.leadersItem}>
      <li key={uuidv4()} className={styles.leadersItem__item}>
        <div className={styles.leadersItem__place}>{leader.rank} place</div>
        <img className={styles.leadersItem__img} src={LeaderImg} alt="leader" />
        <p className={styles.leadersItem__score}>{leader.score}</p>
        <p className={styles.leadersItem__name}>{leader.name}</p>
        <div
          className={cn({
            [listStyles.yellow]: leader.change === 0,
            [listStyles.green]: leader.change > 0,
            [listStyles.red]: leader.change < 0,
          })}
        >
          {leader.change === 0 ? 'No Change' : `${leader.change} place`}
        </div>
        <img className={styles.leadersItem__edit} src={PencilImg} alt="pencil" onClick={() => editLeader(leader)} />
      </li>
    </div>
  );
};

export default LeadersItem;
