import React from 'react'
import { Fragment} from 'react'
import { Tabs, Tab } from "react-bootstrap";
import ProductDescriptionModal from './ProductDescriptionModal';
const ProductDescription = ({product}) => {
    return (
        <Fragment>
            <h4>Product Descriptions</h4>
            <ProductDescriptionModal singleProduct={product}/>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Description">
              {product.description}
            </Tab>
            <Tab eventKey="profile" title="Ingredients">
              {product.ingredients}
            </Tab>
            <Tab eventKey="contact" title="Tips">
              {product.tips}
            </Tab>
          </Tabs>

        </Fragment>
    )
}

export default ProductDescription
