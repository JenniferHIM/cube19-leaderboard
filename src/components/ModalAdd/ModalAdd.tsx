import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {postUrl} from 'redux/api';
import {modalAddLeadersActions, modalPostLeadersAction, postLeaders} from 'redux/modal/modal-actions';
import {toast} from 'react-toastify';
import {addLeaders} from 'redux/leaders/leaders-actions';
import styles from './ModalAdd.module.scss';

const ModalAdd = () => {
  const [leaderName, setLeaderName] = useState('');
  const [leaderScore, setLeaderScore] = useState<number | null>(null);
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalAddLeadersActions());

  useEffect(() => {
    dispatch(postLeaders);
  }, []);

  // const postLeaders = () => {
  //   fetch('http://localhost:3000/game', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: formData, // Use your own property name / key
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setData(result.rows))
  //     .catch((err) => console.log('error'));
  // };

  const handleSubmit = (): void => {
    if (leaderName !== '' && leaderScore !== null) {
      dispatch(addLeaders({name: leaderName, score: leaderScore, rank: 0, change: 0, id: uuidv4()}));
      onToggleModal();
      axios.post(postUrl, {}).then((res) => {
        console.log(res);
        console.log(res.data);
      });
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
