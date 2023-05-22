import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function RegisterForm() {
    const navigate = useNavigate();

    // Form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validated, setValidated] = useState(false);

    // Form Handlers
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    // Form Submission
    const handleSubmit = (e) => {
        const form = e.currentTarget;

        const valid = false;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        } else {
            valid = true;
            setValidated(true);
        }

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Phone Number: ', phoneNumber);
        console.log('Address: ', address);
        console.log('Password: ', password);

        if (valid) {
            navigate("/login");
        }
    
    }

    return (
        <>
            <h1>Register</h1>
            <Card>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter name"
                                onChange={handleNameChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                onChange={handleEmailChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone number"
                                onChange={handlePhoneNumberChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                onChange={handleAddressChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm Password"
                                onChange={handleConfirmPasswordChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please confirm your password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}