import axios from 'axios';
import { GET_ALL_COLORS} from './type';
export const getAllColors = () => async dispatch => {
    try {
        const res = await axios.get("https://localhost:5001/api/BaseColorsV2/BaseColors")
        dispatch({
            type: GET_ALL_COLORS,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}