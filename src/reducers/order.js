import { GET_ALL_ORDERS,GET_SINGLE_ORDER} from '../actions/type';
const initialState = {
    orders: [],
    order: {},
    loading: true
}

export default function order (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ALL_ORDERS:
            return {
                ...state,
                orders: payload,
                loading: false
            }
        case GET_SINGLE_ORDER:
            return{
                ...state,
                order: payload,
                loading: false
            }
        
            default:
                return state;
    }
}