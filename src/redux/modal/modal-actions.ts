import {createAction} from '@reduxjs/toolkit';

export const modalAddLeadersActions = createAction('modal/modalAddLeaders');

export const modalEditLeadersActions = createAction('modal/isModalEditLeaders');

export const modalPostLeadersAction = createAction('modal/isModalPostLeaders');

// export const postLeaders = async (dispatch: Dispatch) => {
//   dispatch(postLeadersRequest());
// try {
//   const {data} = await axios.post(postUrl);
//   const leaders = data.map();
//   dispatch(postLeadersSuccess(leaders));
// } catch (error) {
//   toast.error('Error request');
// }

//   try {
//     await axios.post(postUrl, {
//       username: 'the username entered',
//     });
//   } catch (error) {
//     toast.error('Error request');
//     dispatch(postLeadersError());
//   }
// };
