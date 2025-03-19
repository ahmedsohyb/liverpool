import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Shop = () => {
  const products = [
    { id: 1, name: 'Liverpool Home Jersey', price: '$79.99', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Liverpool Scarf', price: '$19.99', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Liverpool Cap', price: '$24.99', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-danger text-center mb-4">Official Shop</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-3 shadow">
              <Card.Img variant="top" src={product.img} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="danger">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
