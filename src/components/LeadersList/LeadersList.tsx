import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {modalAddLeadersActions, modalEditLeadersActions} from 'redux/modal/modal-actions';
import {ILeader} from 'redux/leaders/interfaces/index';
import {getAllLeaders, sortAllPrevLeaders} from 'redux/leaders/leaders-selectors';
import {modalAddLeadersSelectors, modalEditLeadersSelectors} from 'redux/modal/modal-selectors';
import {fetchLeaders, addPrevLeadersAction} from 'redux/leaders/leaders-actions';
import LeadersItem from '../LeadersItem/LeadersItem';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styles from './LeadersList.module.scss';

const LeadersList = () => {
  const dispatch = useDispatch();
  const [leader, setLeader] = useState<ILeader>();
  const leaders = useSelector(getAllLeaders);
  const prevLeaders = useSelector(sortAllPrevLeaders);
  const [historyDay, setHistoryDay] = useState(0);
  const [toggleHistory, setToggleHistory] = useState(false);

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

  const handlePreviousDay = () => {
    if (prevLeaders.length === historyDay) {
      dispatch({type: [addPrevLeadersAction.type], payload: leaders});
    }
    setHistoryDay(historyDay - 1);
  };

  const handleNextDay = () => {
    setHistoryDay(historyDay + 1);
  };

  const handleToday = () => {
    dispatch(fetchLeaders());
    if (!toggleHistory) {
      dispatch({type: [addPrevLeadersAction.type], payload: leaders});
    }
    if (!toggleHistory || historyDay < prevLeaders.length) {
      setHistoryDay(prevLeaders.length);
    }
    setHistoryDay(historyDay + 1);
    setToggleHistory(false);
  };

  return (
    <div className={styles.leaderList}>
      <div className={styles.leaderList__header}>
        <h2 className={styles.leaderList__title}>Leaders table for this period</h2>
        <button type="button" className={styles.leaderList__button__anotherDay} onClick={handlePreviousDay}>
          Previous Day
        </button>
        <button type="button" className={styles.leaderList__button} onClick={handleToday}>
          Today
        </button>
        <button type="button" className={styles.leaderList__button__anotherDay} onClick={handleNextDay}>
          Next Day
        </button>
        <button type="button" className={styles.leaderList__button} onClick={onToggleAddModal}>
          + Add new score
        </button>
      </div>

      <div className={styles.leaderList__item}>
        {!!leaders.length &&
          leaders.map((leader) => <LeadersItem key={leader.id} leader={leader} editLeader={handleEditLeader} />)}
        {isModalAddLeaders && <ModalAdd />}
        {isModalEditLeaders && leader && <ModalEdit data={leader} />}
      </div>
    </div>
  );
};

export default LeadersList;
