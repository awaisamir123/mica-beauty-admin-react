import { GET_ALL_PRODUCTS,GET_SINGLE_PRODUCT,UPDATE_SINGLE_PRODUCT_DESCRIPTION,GET_SINGLE_PRODUCT_STATUS, GET_SINGLE_PRODUCT_TYPE,GET_SINGLE_PRODUCT_COLLECTIONS} from '../actions/type';
const initialState = {
    products: [],
    product: null,
    productStatus: {},
    productType: {},
    productCollections: [],
    loading: true
}

export default function product (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_SINGLE_PRODUCT:
            return{
                ...state,
                product: payload,
                loading: false
            }
        case UPDATE_SINGLE_PRODUCT_DESCRIPTION:
            return{
                ...state,
                product: payload,
                loading: false
            }
        case GET_SINGLE_PRODUCT_STATUS:
            return{
                ...state,
                productStatus: payload,
                loading: false
            }
        case GET_SINGLE_PRODUCT_TYPE:
            return{
                ...state,
                productType: payload,
                loading: false
            }
        case GET_SINGLE_PRODUCT_COLLECTIONS:
            return{
                ...state,
                productCollections: payload,
                loading: false
            }
            default:
                return state;
    }
}