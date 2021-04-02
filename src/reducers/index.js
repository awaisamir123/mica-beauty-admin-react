import {combineReducers} from 'redux';
import alert from './alert'
import user from './users'
import product from './product'
import color from './baseColors'
import orders from './order'
import recurly from './recurly'
export default(combineReducers({alert,user,product,color,orders,recurly}))