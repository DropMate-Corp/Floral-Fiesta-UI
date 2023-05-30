// Components
import BasicExample from "../../components/Navbar";
import RegisterForm from "./components/RegisterForm";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Register() {
    return (
        <>
            <BasicExample />
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <RegisterForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}