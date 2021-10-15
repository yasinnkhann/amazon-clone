import React from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../stateProvider';
import '../styles/Product.css';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
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
    <motion.div 
      className='product'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt='Some product' />

      <button onClick={addToBasket}>Add to Basket</button>
    </motion.div>
  );
}

export default Product;