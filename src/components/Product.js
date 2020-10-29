import { Button } from '@material-ui/core'
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
                            <Star 
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
                    onClick={addToBasket}
                >
                    Add to Basket 
                </Button>
            </div>
            
        </div>
    )
}

export default Product
