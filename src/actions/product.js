import axios from 'axios';
import { GET_ALL_PRODUCTS,GET_SINGLE_PRODUCT,UPDATE_SINGLE_PRODUCT_DESCRIPTION,GET_SINGLE_PRODUCT_STATUS,GET_SINGLE_PRODUCT_TYPE,GET_SINGLE_PRODUCT_COLLECTIONS} from './type';
export const getAllProducts = () => async dispatch => {
    try {
        const res = await axios.get("https://localhost:5001/api/Product/viewAllProducts")
        dispatch({
            type: GET_ALL_PRODUCTS,
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
    const body = JSON.stringify({id: id});
    try {
        const res = await axios.post("https://localhost:5001/api/Product/getSingleItem",body,config);
        dispatch({
            type: GET_SINGLE_PRODUCT,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}
export const updateSingleProductDescription = ({description,ingredients,tips}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    var id = localStorage.getItem('product_Id');
    var name = localStorage.getItem('product_name');
    const body = JSON.stringify({name,pId: id,description,ingredients,tips});
    try {
        const res = await axios.put("https://localhost:5001/api/Product/EditProductDescription",body,config);
        dispatch({
            type: UPDATE_SINGLE_PRODUCT_DESCRIPTION,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}

export const getSingleProductStatus = (name) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({productName: name});
    try {
        const res = await axios.post("https://localhost:5001/api/Product/getProductStatus",body,config);
        dispatch({
            type: GET_SINGLE_PRODUCT_STATUS,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}
export const getSingleProductType = (name) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({productName: name});
    try {
        const res = await axios.post("https://localhost:5001/api/Product/getProductType",body,config);
        dispatch({
            type: GET_SINGLE_PRODUCT_TYPE,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}
export const getSingleProductCollection = (name) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({productName: name});
    try {
        const res = await axios.post("https://localhost:5001/api/Product/getProductCollection",body,config);
        dispatch({
            type: GET_SINGLE_PRODUCT_COLLECTIONS,
            payload: res.data
        })
    } catch (error) {
        alert(error);
    }
}