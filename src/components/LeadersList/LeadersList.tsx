import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {modalAddLeadersActions, modalEditLeadersActions} from 'redux/modal/modal-actions';
import {ILeader} from 'redux/leaders/interfaces/index';
import {getAllLeaders} from 'redux/leaders/leaders-selectors';
import {modalAddLeadersSelectors, modalEditLeadersSelectors} from 'redux/modal/modal-selectors';
import {fetchLeaders} from 'redux/leaders/leaders-actions';
import LeadersItem from '../LeadersItem/LeadersItem';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styles from './LeadersList.module.scss';

const LeadersList = () => {
  const dispatch = useDispatch();
  const [leader, setLeader] = useState<ILeader>();
  const leaders = useSelector(getAllLeaders);

  useEffect(() => {
    dispatch(fetchLeaders());
  }, []);

  const onToggleAddModal = () => dispatch(modalAddLeadersActions());

  const isModalAddLeaders = useSelector(modalAddLeadersSelectors);
  const isModalEditLeaders = useSelector(modalEditLeadersSelectors);

  const handleEditLeader = (leader: ILeader) => {
    dispatch(modalEditLeadersActions());
    setLeader(leader);
  };

  return (
    <div className={styles.leaderList}>
      <div className={styles.leaderList__header}>
        <h2 className={styles.leaderList__title}>Leaders table for this period</h2>
        <button type="button" className={styles.leaderList__button} onClick={onToggleAddModal}>
          + Add new score
        </button>
      </div>

      <div className={styles.leaderList__item}>
        {!!leaders.length && leaders.map((leader) => <LeadersItem leader={leader} editLeader={handleEditLeader} />)}
        {isModalAddLeaders && <ModalAdd />}
        {isModalEditLeaders && leader && <ModalEdit data={leader} />}
      </div>
    </div>
  );
};

export default LeadersList;
