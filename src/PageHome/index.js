// @flow
import React from 'react';
import UpcomingClimbs from './components/UpcomingClimbs';
import wrapPage from '../widgets/PageWrapper';
import './style.scss';

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="page-home__bottom">
        <div className="page-home-bottom-content">
          <UpcomingClimbs />
        </div>
      </div>
    </div>
  );
};
export default wrapPage(PageHome);
