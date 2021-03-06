import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {modalAddLeadersActions} from 'redux/modal/modal-actions';
import {toast} from 'react-toastify';
import {postLeaders} from 'redux/leaders/leaders-actions';
import styles from './ModalAdd.module.scss';

const ModalAdd = () => {
  const [leaderName, setLeaderName] = useState('');
  const [leaderScore, setLeaderScore] = useState<number | null>(null);
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddLeadersActions());

  const handleSubmit = (): void => {
    if (leaderName !== '' && leaderScore !== null) {
      dispatch(postLeaders({username: leaderName, score: leaderScore}));
      onToggleModal();
    } else {
      toast.error('Type your name and score');
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalAdd}>
          <button className={styles.modalAdd__closeBtn} onClick={onToggleModal}>
            x
          </button>
          <form className={styles.modalAdd__form}>
            <h1 className={styles.modalAdd__title}>Add user score</h1>
            <input
              className={styles.modalAdd__input}
              type="text"
              name="name"
              placeholder="Name:"
              onChange={(e) => setLeaderName(e.target.value)}
            />
            <input
              className={styles.modalAdd__input}
              type="number"
              name="score"
              placeholder="Score:"
              onChange={(e) => setLeaderScore(Number(e.target.value))}
            />
            <button type="submit" onClick={handleSubmit} className={styles.modalAdd__button}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAdd;
