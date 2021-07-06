import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bag } from 'react-bootstrap-icons';
import './index.scss';

function FeaturedCompanies() {
  return (
    <React.Fragment>
      <Container className="feature-company">
        <h3>Featured Companies</h3>
        <Row>
          <Col className="feature-list">
            <ul>
              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">GrandParade</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">Seargin</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">DEX Ventures</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">NBC</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">SVT SP Zoo</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">DG Tech</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">PickSaas</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">BackRose</a>
              </li>

              <li className="feature-item">
                <a href="#" className="icon">
                  <Bag color="gray" size={20}></Bag>
                </a>
                <a href="#" className="title">FrontKom</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default FeaturedCompanies;