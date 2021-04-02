import axios from 'axios';
import { GET_RECURLY_USERS,GET_SINGLE_RECURLY_USER} from './type';
export const getAllProducts = () => async dispatch => {
    try {
        const res = await axios.get("https://localhost:5001/api/Recurly/all-Users")
        debugger;
        dispatch({
            type: GET_RECURLY_USERS,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}
export const getSingleProduct = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({code: id});
    try {
        const res = await axios.post("https://localhost:5001/api/Recurly/all-singleUser",body,config);
        dispatch({
            type: GET_SINGLE_RECURLY_USER,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}