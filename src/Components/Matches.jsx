import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Matches = () => {
  const matches = [
    { id: 1, teams: 'Liverpool vs Manchester United', date: '25/10/2023' },
    { id: 2, teams: 'Liverpool vs Chelsea', date: '30/10/2023' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-danger text-center mb-4">Upcoming Matches</h2>
      <Row>
        {matches.map((match) => (
          <Col md={6} key={match.id}>
            <Card className="mb-3 shadow">
              <Card.Body>
                <Card.Title>{match.teams}</Card.Title>
                <Card.Text>{match.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Matches;
