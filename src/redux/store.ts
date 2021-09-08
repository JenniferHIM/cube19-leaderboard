import {configureStore} from '@reduxjs/toolkit';
import leaders from './leaders/leaders-reducer';

const store = configureStore({
  reducer: {
    leaders,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
