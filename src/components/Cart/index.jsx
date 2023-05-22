import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Cart = ({ onHide }) => {
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

    return formattedPrice;
  };

  const calculateTotal = () => {
    return cartState.items.reduce(
      (total, item) => total + parseFloat(item.price * item.quantity),
      0
    );
  };

  return (
    <Offcanvas show={true} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartState.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartState.items.map((item) => (
                <Card key={item.id} className="mb-3">
                  <Card.Body className="d-flex">
                    <div
                      className="image-container"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                      }}
                    >
                      <Card.Img src={item.photo} alt={item.name} />
                    </div>
                    <div className="d-flex flex-grow-1 align-items-center justify-content-between">
                      <div>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Price: {formatPrice(item.price)}</Card.Text>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => handleDecreaseQuantity(item.id)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </ListGroup>
            <div className="mt-3">
              <p>Total: {formatPrice(calculateTotal())}</p>
              <Button variant="secondary" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
