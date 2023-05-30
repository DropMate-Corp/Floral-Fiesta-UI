import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../../components/Cart/CartContext';

const PurchaseForm = ({ setFormData }) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('deliverHome');
  const [selectedLocation, setSelectedLocation] = useState('');

  const { cartState } = useContext(CartContext);
  const hasCartItems = cartState.items.length > 0;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setFormData({
        name,
        address,
        contactInfo,
        deliveryMethod,
        selectedLocation,
      });
    }

    setValidated(true);

    setName('');
    setAddress('');
    setContactInfo('');
    setDeliveryMethod('deliverHome');
    setSelectedLocation('');
  };


  return (
    <Card className="p-4">
      <Card.Body>
        <Card.Title>Enter your information</Card.Title>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameChange}
              disabled={!hasCartItems}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="address" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={handleAddressChange}
              disabled={!hasCartItems}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your address
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="contactInfo" className="mb-3">
            <Form.Label>Contact Information</Form.Label>
            <Form.Control
              type="text"
              value={contactInfo}
              onChange={handleContactInfoChange}
              disabled={!hasCartItems}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your contact information
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="deliveryMethod" className="mb-3">
            <Form.Label>Delivery Method</Form.Label>
            <div>
              <Form.Check
                type="radio"
                id="deliverHome"
                label="Deliver Home"
                name="deliveryMethod"
                value="deliverHome"
                checked={deliveryMethod === 'deliverHome'}
                onChange={handleDeliveryMethodChange}
                disabled={!hasCartItems}
              />
              <Form.Check
                type="radio"
                id="dropMate"
                label="DropMate Service"
                name="deliveryMethod"
                value="dropMate"
                checked={deliveryMethod === 'dropMate'}
                onChange={handleDeliveryMethodChange}
                disabled={!hasCartItems}
              />
            </div>
            <Form.Control.Feedback type="invalid">
              Please select a delivery method
            </Form.Control.Feedback>
          </Form.Group>

          {deliveryMethod === 'dropMate' && (
            <Form.Group controlId="location" className="mb-3">
              <Form.Label>Delivery Location</Form.Label>
              <Form.Control
                as="select"
                value={selectedLocation}
                onChange={handleLocationChange}
                required={deliveryMethod === 'dropMate'}
              >
                <option value="">Select a location</option>
                <option value="Location A">Location A</option>
                <option value="Location B">Location B</option>
                <option value="Location C">Location C</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a delivery location
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Button variant="primary" type="submit" disabled={!hasCartItems}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PurchaseForm;
