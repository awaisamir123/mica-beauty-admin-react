import React from 'react'

function CreateProductStep2({values: {productStatus,productType},change,nextStep,prevStep}) {
    
    const nextPage = async (e) =>{
        e.preventDefault();
        nextStep();
    }
    const previousPage = async (e) =>{
        e.preventDefault();
        prevStep();
    }
    return (
        <div>
            <h2>Enter in Product Status</h2>

            <select name="productType" value={productType} onChange={change}>
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
          </select>

          <h2>Enter in Product Type</h2>
            <select name="productType" value={productType} onChange={change}>
            <option value="Cosmetic Brushes">Cosmetic Brushes</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Gift Card">Gift Card</option>
            <option value="Skincare">Skincare</option>
            <option value="Custom">Custom</option>
          </select>
            <input type="submit" onClick={nextPage } value="Continue"></input>
            <input type="submit" onClick={previousPage } value="Back"></input>
        </div>
    )
}

export default CreateProductStep2