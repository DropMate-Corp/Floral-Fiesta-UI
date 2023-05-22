// Components
import BasicExample from "../../components/Navbar";
import LoginForm from "./components/LoginForm";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {
    return (
        <>
            <BasicExample />
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}