import React, { useContext, useState } from 'react';
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
import ConfirmPurchaseModal from './components/ConfirmPurchaseModal';

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

  // Confirmation Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (formData) => {
    const { name, address, contactInfo, deliveryMethod, selectedLocation } = formData;

    const order = {
      name,
      address,
      contactInfo,
      deliveryMethod,
      selectedLocation,
      items: cartState.items,
    };

    console.log(order);
    
    // Show confirmation modal
    handleShow();

    // Clear cart
    handleClearCart();

    // Redirect to home page after sleeping for 5 seconds
    setTimeout(() => {
      navigate('/');
    }, 1000);
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
              <PurchaseForm setFormData={(formData) => handleFormSubmit(formData)} />
            </div>
          </Col>
        </Row>
      </Container>
      <ConfirmPurchaseModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Purchase;
