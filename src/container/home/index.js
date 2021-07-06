import React from 'react';
import Header from '../../components/Header';
import JobOffers from '../../components/JobOffers';
import FeaturedCompanies from '../../components/FeaturedCompanies';
import './index.scss';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <JobOffers />
      <FeaturedCompanies />
    </React.Fragment>
  );
}

export default Home;