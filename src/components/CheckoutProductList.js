import { Button } from '@material-ui/core';
import { Star} from '@material-ui/icons';
import React from 'react';
import '../assets/css/CheckoutProductList.css'
import { useStateValue} from './StateProvider'

function CheckoutProductList({ id, title, image, price, rating, hideButton }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProductList">
            <img 
                className="checkoutProduct__image"
                src={image}
                alt=""
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <Star />
                    ))}
                </div>
                {!hideButton && (
                    <Button 
                        className="checkoutProduct__removeButton"
                        variant="contained"
                        size="medium"
                        color="secondary"
                        onClick={removeFromBasket}
                    >Remove from Basket</Button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProductList
