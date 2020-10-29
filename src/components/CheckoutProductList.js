import { Button } from '@material-ui/core';
import { StarBorderOutlined } from '@material-ui/icons';
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
                        <StarBorderOutlined />
                    ))}
                </div>
                {!hideButton && (
                    <Button onClick={removeFromBasket}>Remove from Basket</Button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProductList
