import React from 'react'
import PropTypes from 'prop-types'; 
function Product({name,price,isAvailable}) {

  return (
    <div>
    <h1>Product Name : {name}</h1>
    <h1>Product Price : {price}</h1>
    <h1>Product Availability : {isAvailable? 'Available' : 'Not Available'}</h1>

    </div>
  )
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired
}

Product.defaultProps = {
    name: "undefined",
    price: 0,
    isAvailable: false
}

export default Product