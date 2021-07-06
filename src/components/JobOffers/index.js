import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, ArrowRightSquareFill } from 'react-bootstrap-icons';
import './index.scss';

function JobOffers() {
  return (
    <React.Fragment>
      <Container className="job-offers">
        <Row xs="1" sm="1" md="2">
          <Col>
            <h3>Newest Job Offers</h3>
          </Col>
          <Col className="view-all">
            <a href="#">View all job offers <ArrowRight color="royalblue" size={16} /> </a>
          </Col>
        </Row>
        <Row xs="1" sm="1" md="3">
          <Col className="job-info">
            <div className="job-title">
              <h4>Junior Java Developer</h4>
            </div>
            <div className="post-time">2 hours ago</div>
            <div className="company-info">
              PickSaas <span className="location">Wrclaw, Polska</span>
            </div>
            <p className="description">
              I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work) <br></br>
              $ up to PLN 550 net / MD B2B
            </p>
            <a href="#" className="review"><ArrowRightSquareFill color="royalblue" size={30}></ArrowRightSquareFill></a>
          </Col>

          <Col className="job-info">
            <div className="job-title">
              <h4>Junior Project Manager</h4>
            </div>
            <div className="post-time">3 hours ago</div>
            <div className="company-info">
              FrontKom <span className="location">Lublin, Polska</span>
            </div>
            <p className="description">
              Join us in the Lublin office to build innovative log-term projects. Exciting internaltional clients and partners and a work environment ocused on learning and growth awaits you!<br></br>
            </p>
            <a href="#" className="review"><ArrowRightSquareFill color="royalblue" size={30}></ArrowRightSquareFill></a>
          </Col>

          <Col className="job-info">
            <div className="job-title">
              <h4>Junior Project Manager</h4>
            </div>
            <div className="post-time">1 day ago</div>
            <div className="company-info">
              FrontKom <span className="location">Lublin, Polska</span>
            </div>
            <p className="description">
              I am currently looking for a Junior Project Manager. Project for Public Sector Location: Wroclaw (during the pandemic remote work) <br></br>
              $ up to PLN 550 net / MD B2B
            </p>
            <a href="#" className="review"><ArrowRightSquareFill color="royalblue" size={30}></ArrowRightSquareFill></a>
          </Col>
        </Row>
      </Container>
    </React.Fragment >
  )
}

export default JobOffers;