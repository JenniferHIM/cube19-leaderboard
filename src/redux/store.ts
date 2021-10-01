import {configureStore} from '@reduxjs/toolkit';
import {leaders} from './leaders/leaders-reducer';
import {isModalAddLeaders, isModalEditLeaders} from './modal/modal-reducer';

const store = configureStore({
  reducer: {
    leaders,
    isModalAddLeaders,
    isModalEditLeaders,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
