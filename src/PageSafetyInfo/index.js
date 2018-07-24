/**
 * @flow
 * static info page
 * */

import React from 'react';
import wrapPage from 'widgets/PageWrapper';
import './style.scss';

const marked = require('marked');
const safety = require('./safety.md');

const PageSafetyInfo = () => {
  return (
    <div
      className="page-safety-info"
      dangerouslySetInnerHTML={{ __html: marked(safety) }}
    />
  );
};

export default wrapPage(PageSafetyInfo);
