import {configureStore} from '@reduxjs/toolkit';
import {leaders, prevLeaders} from './leaders/leaders-reducer';
import {isModalAddLeaders, isModalEditLeaders} from './modal/modal-reducer';

const store = configureStore({
  reducer: {
    leaders,
    prevLeaders,
    isModalAddLeaders,
    isModalEditLeaders,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
