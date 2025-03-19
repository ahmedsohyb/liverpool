import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const News = () => {
  const newsList = [
    { id: 1, title: 'Liverpool wins the Champions League!', content: 'Liverpool secures victory in the final match.' },
    { id: 2, title: 'New signing announced', content: 'John Doe officially joins Liverpool FC.' },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-danger text-center mb-4">Latest News</h2>
      <Row>
        {newsList.map((news) => (
          <Col md={6} key={news.id}>
            <Card className="mb-3 shadow">
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
