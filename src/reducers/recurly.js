import { GET_RECURLY_USERS,GET_SINGLE_RECURLY_USER} from '../actions/type';
const initialState = {
    recurlyUsers: [],
    recurlyUser: {},
    loading: true
}

export default function recurly (state = initialState, action){
    const {type, payload} = action;
    debugger;
    switch(type){
        case GET_RECURLY_USERS:
            return {
                ...state,
                recurlyUsers: payload,
                loading: false
            }
            case GET_SINGLE_RECURLY_USER:
                return{
                    ...state,
                    recurlyUser: payload,
                    loading: false
                }
            default:
                return state;
    }
}