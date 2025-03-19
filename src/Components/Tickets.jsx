import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Tickets = () => {
  const tickets = [
    { id: 1, match: 'Liverpool vs Manchester United', date: '25/10/2023', price: '$50' },
    { id: 2, match: 'Liverpool vs Chelsea', date: '30/10/2023', price: '$55' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-danger text-center mb-4">Tickets Information</h2>
      <Row>
        {tickets.map((ticket) => (
          <Col md={6} key={ticket.id}>
            <Card className="mb-3 shadow">
              <Card.Body>
                <Card.Title>{ticket.match}</Card.Title>
                <Card.Text><strong>Date:</strong> {ticket.date}</Card.Text>
                <Card.Text><strong>Price:</strong> {ticket.price}</Card.Text>
                <Button variant="danger">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Tickets;
