import { Button } from '@material-ui/core'
import React from 'react'
import '../assets/css/Product.css'

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__container">
                <img 
                    className="product__image"
                    src="https://m.media-amazon.com/images/I/51qX1PpW4fL._AC_SY480_.jpg"
                    alt=""
                />
                <div className="product__info">
                    <h3>Product Title</h3>
                    <div className="product__price">
                        <small>$</small>
                        <strong>19.99</strong>
                    </div>
                    
                </div>
                <Button
                    className="product__button"
                    size="small"
                    variant="contained"
                    color="secondary"
                >
                    Add to Basket 
                </Button>
            </div>
            
        </div>
    )
}

export default Product
