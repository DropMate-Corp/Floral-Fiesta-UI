import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import BasicExample from "../../components/Navbar";
import OrderCard from "./components/OrderCard";
import { orders } from "../../_mocks/Orders";

export default function Tracking() {
  const [displayedOrders, setDisplayedOrders] = useState(5);

  const loadMoreOrders = () => {
    setDisplayedOrders(prevCount => prevCount + 5);
  };

  return (
    <>
      <BasicExample />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col xs={12} md={7}>
            <h1 className="text-center mb-5">Order Tracking</h1>
            {orders.slice(0, displayedOrders).map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
            {displayedOrders < orders.length && (
              <div className="text-center mt-3">
                <Button onClick={loadMoreOrders}>Load More Orders</Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
