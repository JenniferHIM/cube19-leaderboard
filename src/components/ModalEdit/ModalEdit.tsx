import {useState, FC, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {ILeader} from 'redux/leaders/interfaces/index';
import {modalEditLeadersActions} from 'redux/modal/modal-actions';
import {editLeaders} from 'redux/leaders/leaders-actions';
import {toast} from 'react-toastify';
import styles from 'components/ModalEdit/ModalEdit.module.scss';

interface ModalEditProps {
  data: ILeader;
}

const ModalEdit: FC<ModalEditProps> = ({data}: ModalEditProps) => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalEditLeadersActions());
  const [editLeader, setEditLeader] = useState(data);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (field === 'name') {
      setEditLeader((state) => ({
        ...state,
        name: e.target.value,
      }));
    } else {
      setEditLeader((state) => ({
        ...state,
        score: Number(e.target.value),
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (data.score !== editLeader.score) {
      dispatch(editLeaders(editLeader));
      onToggleModal();
    } else {
      toast.error('It has no changes!');
    }
  };

  const handleBackdrop = (event: React.FormEvent<EventTarget>): void => {
    if (event.currentTarget === event.target) {
      onToggleModal();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdrop}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalEdit}>
          <button className={styles.modalEdit__closeBtn} onClick={onToggleModal}>
            x
          </button>
          <form className={styles.modalEdit__form} onSubmit={handleSubmit}>
            <h1 className={styles.modalEdit__title}>Edit user score</h1>
            <input
              className={styles.modalEdit__input}
              type="text"
              name={data.name}
              placeholder="Name:"
              onChange={(e) => handleInput(e, 'name')}
            />
            <input
              className={styles.modalEdit__input}
              type="number"
              name="score"
              placeholder="Score:"
              onChange={(e) => handleInput(e, 'score')}
            />
            <button type="submit" onClick={handleSubmit} className={styles.modalEdit__button}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
