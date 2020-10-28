import { Button } from '@material-ui/core'
import React from 'react'
import '../assets/css/Product.css'

function Product(title, price) {
    return (
        <div className="product">
            <img 
                    className="product__image"
                    src="https://m.media-amazon.com/images/I/51qX1PpW4fL._AC_SY480_.jpg"
                    alt=""
                />
            <div className="product__info">
                <h3>Product Title</h3>
                <h4>Product Price</h4>
                <small>$</small>
                <strong>19.99</strong>
            </div>
            <Button >Add to Basket</Button>
        </div>
    )
}

export default Product
