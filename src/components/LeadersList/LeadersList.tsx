import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {modalAddLeadersActions, modalEditLeadersActions} from 'redux/modal/modal-actions';
import {ILeader} from 'redux/leaders/interfaces/index';
import {sortAllLeaders} from 'redux/leaders/leaders-selectors';
import {modalAddLeadersSelectors, modalEditLeadersSelectors} from 'redux/modal/modal-selectors';
import LeadersItem from '../LeadersItem/LeadersItem';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styles from './LeadersList.module.scss';

const LeadersList = () => {
  const dispatch = useDispatch();
  const [firstLeader, setFirstLeader] = useState<ILeader>({name: '', rank: 0, score: 0, change: 0});
  const leaders = useSelector(sortAllLeaders);

  const onToggleAddModal = () => dispatch(modalAddLeadersActions());

  const isModalAddLeaders = useSelector(modalAddLeadersSelectors);
  const isModalEditLeaders = useSelector(modalEditLeadersSelectors);

  const handleEditLeader = (leader: ILeader) => {
    dispatch(modalEditLeadersActions());
    setFirstLeader(leader);
  };

  return (
    <div className={styles.leaderList}>
      <h2 className={styles.leaderList__title}>Leaders table for this period</h2>
      <button type="button" className={styles.leaderList__button} onClick={onToggleAddModal}>
        + Add new score
      </button>
      <div className={styles.leaderList__item}>
        <LeadersItem leaders={[]} editLeader={handleEditLeader} />
        {isModalAddLeaders && <ModalAdd />}
        {isModalEditLeaders && <ModalEdit data={firstLeader} />}
      </div>
    </div>
  );
};

export default LeadersList;
