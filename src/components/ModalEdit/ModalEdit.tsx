import {useState, FC, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {ILeader} from 'redux/leaders/interfaces/index';
import {editLeadersActions} from 'redux/leaders/leaders-types';
import {modalEditLeadersActions} from 'redux/modal/modal-actions';
import {toast} from 'react-toastify';
import styles from 'components/ModalEdit/ModalEdit.module.scss';

interface ModalEditProps {
  data: ILeader;
}

const ModalEdit: FC<ModalEditProps> = ({data}: ModalEditProps) => {
  const dispatch = useDispatch();
  const onToggleModal = () => dispatch(modalEditLeadersActions());
  const [editLeader, setEditLeader] = useState(data);

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

  return (
    <div className={styles.modalEdit}>
      <form onSubmit={handleSubmit}>
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
        <button>Save</button>
      </form>
    </div>
  );
};

export default ModalEdit;
