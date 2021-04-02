import React from 'react'
import { Fragment } from 'react';

function ProductList({product}) {
    const gotoProduct = (productInfo) =>{
        localStorage.setItem('product_Id',productInfo.id);
        localStorage.setItem('product_name',productInfo.name);
        window.location.href = "/singleProduct";
    }
    return (
        <Fragment>
            <tr onClick={ () => gotoProduct(product)}>
                <th scope="row"><img style={{width: '50%', height:'50%'}} src={product.imageUrl} alt={product.name}/></th>
                <th>{product.name}</th>
                <th>{product.status}</th>
            </tr>
        </Fragment>
    )
}

export default ProductList
