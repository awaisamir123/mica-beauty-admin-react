import React from "react";

function CreateProductStep1({
  values: { productName, productDescription, productIngredients, productTips },
  change,
  nextStep,
}) {
  const nextPage = async (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <h2>Enter in Product Information</h2>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <br></br>
        <input onChange={change} name="productName" value={productName}></input>
      </div>
      <div className="form-group">
        <label htmlFor="productName">Product Description</label>
        <br></br>
        <textarea
          onChange={change}
          name="productDescription"
          value={productDescription}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="productName">Product Ingredients</label>
        <br></br>
        <textarea
          onChange={change}
          name="productIngredients"
          value={productIngredients}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="productName">Product Tips</label>
        <br></br>
        <textarea
          onChange={change}
          name="productTips"
          value={productTips}
        ></textarea>
      </div>
      <input type="submit" onClick={nextPage} value="Continue"></input>
    </div>
  );
}

export default CreateProductStep1;
