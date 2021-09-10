import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {modalAddLeadersActions, modalEditLeadersActions} from 'redux/modal/modal-actions';
import {ILeader} from '../../redux/leaders/interfaces/index';
import LeadersItem from '../LeadersItem/LeadersItem';
import {sortAllLeaders} from '../../redux/leaders/leaders-selectors';
import {modalAddLeadersSelectors, modalEditLeadersSelectors} from '../../redux/modal/modal-selectors';
import styles from './LeadersList.module.scss';

const LeadersList = () => {
  const dispatch = useDispatch();
  const [leader, setLeader] = useState<ILeader>({name: '', rank: 0, score: 0});
  const leaders = useSelector(sortAllLeaders);

  const onToggleAddModal = () => dispatch(modalAddLeadersActions());

  const handleUpdateLeader = (leader: ILeader) => {
    dispatch(modalEditLeadersActions());
    setLeader(leader);
  };

  return (
    <div className={styles.leaderList}>
      <h2 className={styles.leaderList__title}>Leaders table for this period</h2>
      <button type="button" className={styles.leaderList__button} onClick={onToggleAddModal}>
        + Add new score
      </button>
      <LeadersItem leaders={[]} />
    </div>
  );
};

export default LeadersList;
