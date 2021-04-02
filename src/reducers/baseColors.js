import { GET_ALL_COLORS} from '../actions/type';
const initialState = {
    colors: [],
    loading: true
}

export default function color (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ALL_COLORS:
            return {
                ...state,
                colors: payload,
                loading: false
            }
        
            default:
                return state;
    }
}