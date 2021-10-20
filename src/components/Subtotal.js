import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateProvider.js';
import { getBasketTotal } from '../reducer.js';
import '../styles/Subtotal.css';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket?.length}{' '}
              {basket.length > 1 || basket.length === 0 ? 'Items' : 'Item'}):{' '}
              <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={() => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
