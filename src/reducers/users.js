import { GET_USERS,USERS_ERROR,GET_SINGLE_USERS,GET_SINGLE_USER_COLORS,GET_SINGLE_COLOR } from '../actions/type';
const initialState = {
  user: null,
  users: [],
  colors: [],
  color: null,
  loading: true,
  error: {},
};

export default function users (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
      case GET_SINGLE_USERS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
      case GET_SINGLE_USER_COLORS:
        return {
          ...state,
          colors: payload,
          loading: false
        }
      case GET_SINGLE_COLOR:
        return{
          ...state,
          color: payload,
          loading: false
        }
    case USERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}