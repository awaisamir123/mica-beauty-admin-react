import axios from 'axios';
import { GET_ALL_ORDERS,GET_SINGLE_ORDER} from './type';
export const getAllOrders = () => async dispatch => {
    try {
        const res = await axios.get("https://localhost:5001/api/OrderV2")
        dispatch({
            type: GET_ALL_ORDERS,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}
export const getSingleOrder = () => async dispatch => {
    var OrderId = localStorage.getItem('orderId');
    try {
        const res = await axios.post("https://localhost:5001/api/OrderV2/get-singleorder",{id: OrderId });
        dispatch({
            type: GET_SINGLE_ORDER,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}