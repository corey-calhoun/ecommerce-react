import { Button } from '@material-ui/core'
import { StarRate } from '@material-ui/icons'
import React from 'react'
import '../assets/css/Product.css'

function Product({id,title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__container">
                <img 
                    className="product__image"
                    src={image}
                    alt=""
                />
                <div className="product__info">
                    <h5>{title}</h5>
                    <div className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </div>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarRate 
                             className="product__rating"
                             size="small"
                            />
                        ))}
                    
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
