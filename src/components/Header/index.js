import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.scss';

function Header() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col className="header">
            <Container>
              <div className="header-info">
                <h1>Juniors make IT work</h1>
                <strong>Hire and invest in highly skilled juniors now.</strong>
                <Button variant="primary">Post Offer Now</Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Header;