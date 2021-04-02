import axios from 'axios';
import { GET_USERS,USERS_ERROR,GET_SINGLE_USERS,GET_SINGLE_USER_COLORS,GET_SINGLE_COLOR} from './type';

export const getAllUsers = () => async dispatch => {
    try{
        const res =  await axios.get('https://localhost:5001/api/ApplicationUser/users');
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        
        dispatch({
            type: USERS_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}
export const getSingleUser = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({UserId: id});
    try {
        const res = await axios.post('https://localhost:5001/api/ApplicationUser/singleuser',body,config);
        
        dispatch({
            type: GET_SINGLE_USERS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}
export const getUsersColors = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({UserId: id});
    try {
        const res = await axios.post('https://localhost:5001/api/BaseColors/getAllColors',body,config);
        
        dispatch({
            type: GET_SINGLE_USER_COLORS,
            payload: res.data
        })
    } catch (error) {
        
        dispatch({
            type: USERS_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}
export const getUsersSingleColor = (id) => async dispatch => {
    debugger;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({colorCode: id});
    try {
        const res = await axios.post('https://localhost:5001/api/BaseColors/getSingleColor',body,config);
        
        dispatch({
            type: GET_SINGLE_COLOR,
            payload: res.data
        })
    } catch (error) {
        
        dispatch({
            type: USERS_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        })
    }
}