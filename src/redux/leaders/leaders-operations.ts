import {v4 as uuidv4} from 'uuid';
import {ILeader} from './interfaces/index';

export const addLeadersOperations = (state: ILeader[], {payload}: {payload: ILeader}) => [...state, {...payload}];

export const editLeadersOperations = (state: ILeader[], {payload}: {payload: ILeader}) =>
  state.map((leader) => (leader.id === payload.id ? payload : leader));

export const getLeadersOperations = (state: ILeader[], {payload}: {payload: ILeader[]}) => [
  ...payload.map((item) => ({...item, id: uuidv4(), rank: 0, change: 0})),
];

// export const fetchLeadersOperations = createAsyncThunk('leaders/fetchLeaders', async () => {
//   const leaders = await getLeaders();
//   return leaders;
// });

// export const addLeadersOperations = createAsyncThunk('leaders/add', async (newObject) => {
//   const contacts = await addLeadersRequest(newObject);
//   return leaders;
// });

// export const editLeadersOperations = createAsyncThunk('leaders/edit', async (id) => {(await editContactsRequest(id))});
