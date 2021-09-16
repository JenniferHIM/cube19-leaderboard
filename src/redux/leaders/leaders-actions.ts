import {createAction} from '@reduxjs/toolkit';
import {ILeader} from './interfaces';

export const addLeaders = createAction<ILeader>('leaders/add');
export const editLeaders = createAction('leaders/edit');
