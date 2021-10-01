import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {modalAddLeadersActions, modalEditLeadersActions} from 'redux/modal/modal-actions';
import {ILeader} from 'redux/leaders/interfaces/index';
import {getAllLeaders, getCurrentDay} from 'redux/leaders/leaders-selectors';
import {modalAddLeadersSelectors, modalEditLeadersSelectors} from 'redux/modal/modal-selectors';
import {fetchLeaders, setCurrentDay} from 'redux/leaders/leaders-actions';
import LeadersItem from '../LeadersItem/LeadersItem';
import ModalAdd from '../ModalAdd/ModalAdd';
import ModalEdit from '../ModalEdit/ModalEdit';
import styles from './LeadersList.module.scss';

const LeadersList = () => {
  const dispatch = useDispatch();
  const [leader, setLeader] = useState<ILeader>();
  const leaders = useSelector(getAllLeaders);
  const currentDay = useSelector(getCurrentDay);

  useEffect(() => {
    dispatch(fetchLeaders());
  }, []);

  useEffect(() => {
    if (currentDay >= leaders.length) {
      dispatch(fetchLeaders());
    }
  }, [currentDay]);

  const onToggleAddModal = () => dispatch(modalAddLeadersActions());

  const isModalAddLeaders = useSelector(modalAddLeadersSelectors);
  const isModalEditLeaders = useSelector(modalEditLeadersSelectors);

  const handleEditLeader = (leader: ILeader) => {
    dispatch(modalEditLeadersActions());
    setLeader(leader);
  };

  const handlePreviousDay = () => {
    dispatch(setCurrentDay(currentDay - 1));
  };

  const handleNextDay = () => {
    dispatch(setCurrentDay(currentDay + 1));
  };

  // const handleNextDay = () => {
  //   setHistoryDay(historyDay + 1);
  // };

  // const difBetweenLeaders = (arrayOfLeaders: ILeader[], arrayOfPrevLeaders: ILeader[][]) => {
  //   arrayOfLeaders.map((leader: ILeader) =>
  //     arrayOfPrevLeaders.map((prevLeader: ILeader[]) =>
  //       prevLeader.map((leadersObject) => {
  //         if (leader.name === leadersObject.name) {
  //           leader.change = leadersObject.rank - leader.rank;
  //         }
  //         return leader.change;
  //       })
  //     )
  //   );
  // };

  // difBetweenLeaders(leaders, prevLeaders);

  return (
    <div className={styles.leaderList}>
      <div className={styles.leaderList__header}>
        <h2 className={styles.leaderList__title}>Leaders table for this period</h2>
        <button
          type="button"
          disabled={currentDay === 0}
          className={styles.leaderList__button__anotherDay}
          onClick={handlePreviousDay}
        >
          Previous Day
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
          leaders[currentDay]?.map((leader) => (
            <LeadersItem key={leader.id} leader={leader} editLeader={handleEditLeader} />
          ))}
        {isModalAddLeaders && <ModalAdd />}
        {isModalEditLeaders && leader && <ModalEdit data={leader} />}
      </div>
    </div>
  );
};

export default LeadersList;
