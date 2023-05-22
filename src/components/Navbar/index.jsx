import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart';
import {CartContext} from '../Cart/CartContext';

function BasicExample() {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const loggedIn = localStorage.getItem('loggedIn');
  const { cartState } = useContext(CartContext);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Link to="/" className="navbar-brand">FloralFiesta</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div className="navbar-text">
              {loggedIn ? (
                <Row className="align-items-center">
                  <Col xs="auto">
                    <button className="btn" onClick={handleCartToggle}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      {cartState.items.length > 0 && (
                        <Badge bg="danger" className="ms-1">{cartState.items.length}</Badge>
                      )}
                    </button>
                  </Col>
                  <Col xs="auto">
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                  </Col>
                </Row>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <span> | </span>
                  <Link to="/register">Register</Link>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showCart && <Cart onHide={() => setShowCart(false)} />}
    </>
  );
}

export default BasicExample;
