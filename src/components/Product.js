import { Button } from '@material-ui/core';
import { Star } from '@material-ui/icons'
import React from 'react'
import '../assets/css/Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    console.log(basket)

    const addToBasket = () => {
        //dispatch item into the data later
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <Star />
                    ))}
                </div>
            </div>
            <Button 
                variant="contained"
                color="secondary"
                onClick={addToBasket}
            >Add to Basket</Button>
        </div>
      );
    }
    

export default Product
