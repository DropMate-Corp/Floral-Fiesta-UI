import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Components
import CartItem from '../../components/Cart/CartItem';
import { CartContext } from '../../components/Cart/CartContext';
import BasicExample from '../../components/Navbar';
import PurchaseForm from './components/PurchaseForm';

const Purchase = () => {
  const navigate = useNavigate();

  const { cartState, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  
    const euroSymbol = '\u20AC'; // Euro symbol
  
    return formattedPrice.replace('€', '') + euroSymbol;
  };
  
  const calculateTotal = () => {
    return cartState.items.reduce(
      (total, item) => total + parseFloat(item.price * item.quantity),
      0
    );
  };

  return (
    <>
      <BasicExample />
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={5}>
            <div>
              {cartState.items.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cartState.items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      handleRemoveFromCart={handleRemoveFromCart}
                      handleIncreaseQuantity={handleIncreaseQuantity}
                      handleDecreaseQuantity={handleDecreaseQuantity}
                      formatPrice={formatPrice}
                    />
                  ))}
                </>
              )}
            </div>
            <div>
              <p>Total: {formatPrice(calculateTotal())}</p>
              <Button variant="secondary" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          </Col>
          <Col xs={12} md={1}></Col>
          <Col xs={12} md={5}>
            <div>
              <PurchaseForm />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Purchase;
