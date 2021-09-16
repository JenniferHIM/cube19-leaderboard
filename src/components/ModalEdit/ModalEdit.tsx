import {useState, FC, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {ILeader} from 'redux/leaders/interfaces/index';
import {editLeadersActions} from 'redux/leaders/leaders-types';
import {modalEditLeadersActions} from 'redux/modal/modal-actions';
import {toast} from 'react-toastify';
import {ClickAwayListener} from '@material-ui/core';
import styles from 'components/ModalEdit/ModalEdit.module.scss';

interface ModalEditProps {
  data: ILeader;
}

const ModalEdit: FC<ModalEditProps> = ({data}: ModalEditProps) => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalEditLeadersActions());
  const [editLeader, setEditLeader] = useState(data);
  const [open, setOpen] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditLeader((state) => ({
      ...state,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (data.score !== editLeader.score) {
      dispatch({type: [editLeadersActions.type], payload: editLeader});
      onToggleModal();
    } else {
      toast.error('It has no changes!');
    }
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={styles.backdrop}>
        <div className={styles.modalWrapper}>
          <div className={styles.modalEdit}>
            <button className={styles.modalEdit__closeBtn} onClick={handleClick}>
              x
            </button>
            <form className={styles.modalEdit__form} onSubmit={handleSubmit}>
              <h1 className={styles.modalEdit__title}>Edit user score</h1>
              <input
                className={styles.modalEdit__input}
                type="text"
                name={data.name}
                placeholder="Name:"
                onChange={handleInput}
              />
              <input
                className={styles.modalEdit__input}
                type="number"
                name="score"
                placeholder="Score:"
                onChange={handleInput}
              />
              <button type="submit" className={styles.modalEdit__button}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default ModalEdit;
