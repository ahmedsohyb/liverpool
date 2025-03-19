import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Team = () => {
  const players = [
    { id: 1, name: 'Mohamed Salah', position: 'Forward', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Virgil van Dijk', position: 'Defender', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Alisson Becker', position: 'Goalkeeper', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-danger text-center mb-4">Team Squad</h2>
      <Row>
        {players.map((player) => (
          <Col md={4} key={player.id}>
            <Card className="mb-3 shadow">
              <Card.Img variant="top" src={player.img} alt={player.name} />
              <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>{player.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
