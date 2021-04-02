import { SET_ALERT } from './type';

export const setAlert = (msg, alertType) => (dispatch) => {

  const _id = Math.floor((Math.random()*100)+1);
  dispatch({
    type: SET_ALERT,
    payload: {msg,alertType,_id}
  });
};