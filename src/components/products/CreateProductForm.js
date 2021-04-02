import React, { Component } from "react";
import CreateProductStep1 from "./CreateProductStep1";
import CreateProductStep2 from './CreateProductStep2'
import CreateProductVerify from "./CreateProductVerify";

export class CreateProductForm extends Component {
  state = {
    step: 1,
    productName: "",
    productDescription: "",
    productIngredients: "",
    productTips: "",
    productStatus: "Active",
    productType: "Cosmetic Brushes"
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  render() {
    const { step } = this.state;
    const {
      productName,
      productDescription,
      productIngredients,
      productTips,
      productStatus,
      productType,
      fruites
    } = this.state;
    const values = {
      productName,
      productDescription,
      productIngredients,
      productTips,
      productStatus,
      productType,
      fruites
    };
    switch (step) {
      case 1:
        return (
            <CreateProductStep1
            nextStep={this.nextStep}
            change={this.change}
            values={values}
          ></CreateProductStep1>
        );
        case 2:
            return(
                <CreateProductStep2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                change={this.change}
                values={values}
              ></CreateProductStep2>
            );
          
      default:
        return (
          <CreateProductVerify
            nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
          ></CreateProductVerify>
        );
    }
  }
}

export default CreateProductForm;
