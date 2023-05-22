import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function LoginForm() {
    const navigate = useNavigate();

    // Form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validated, setValidated] = useState(false);

    // Form Handlers
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // Form Submission
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        const valid = true;
        setValidated(valid);

        console.log('Email: ', email);
        console.log('Password: ', password);

        if (valid) {
            // Set Log in Local Storage
            localStorage.setItem('loggedIn', true);

            // Redirect to Home
            navigate("/");
        }
    }

    return (
        <>
            <h1>Login</h1>
            <Card>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                onChange={handleEmailChange} />
                            <Form.Control.Feedback type="invalid">
                                Please enter your email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                onChange={handlePasswordChange} />
                            <Form.Control.Feedback type="invalid">
                                Please enter your password.
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