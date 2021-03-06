import React, { forwardRef } from 'react';
import { useStateValue } from '../stateProvider.js';
import '../styles/CheckoutProduct.css';

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
    };

    return (
      <div ref={ref} className='checkoutProduct'>
        <img
          className='checkoutProduct__image'
          src={image}
          alt='Checkout Product'
        />

        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='checkoutProduct__rating'>
            {Array(rating)
              .fill()
              .map(() => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
