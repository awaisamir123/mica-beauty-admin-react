import React from 'react'

function CreateProductVerify({values: {productStatus,productType,productName,productDescription,productIngredients,productTips},prevStep}) {
    const previousPage = async (e) =>{
        e.preventDefault();
        prevStep();
    }
    const saveInfo = () => {
        alert(productType);
    }
    return (
        <div>
            <label>{productName}</label>
            <label>{productDescription}</label>
            <label>{productIngredients}</label>
            <label>{productTips}</label>
            <label>{productStatus}</label>
            <label>{productType}</label>
            <input type="submit" onClick={saveInfo} value="Submit"></input>
            <input type="submit" onClick={previousPage } value="Back"></input>
        </div>
    )
}

export default CreateProductVerify
