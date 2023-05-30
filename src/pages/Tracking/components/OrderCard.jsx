import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function OrderCard({ order }) {
    // Define a CSS class based on the order status
    let statusClassName = "";
    switch (order.status) {
        case "pending":
            statusClassName = "text-warning";
            break;
        case "ready":
            statusClassName = "text-info";
            break;
        case "completed":
            statusClassName = "text-success";
            break;
        default:
            statusClassName = "text-muted";
            break;
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Row>
                    <Col xs={12} md={4}>
                        <Card.Title>Order {order.id}</Card.Title>
                        <Card.Subtitle className="mb-2">
                            {order.description}
                        </Card.Subtitle>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card.Text>
                            <strong>Pickup Code:</strong> {order.pickup_code}
                        </Card.Text>
                        <Card.Text>
                            <strong>Status:</strong>{" "}
                            <span className={statusClassName}>{order.status}</span>
                        </Card.Text>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card.Text>
                            <strong>Delivery Date:</strong>{" "}
                            {order.delivery_date ? order.delivery_date : "N/A"}
                        </Card.Text>
                        <Card.Text>
                            <strong>Pickup Date:</strong>{" "}
                            {order.pickup_date ? order.pickup_date : "N/A"}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
