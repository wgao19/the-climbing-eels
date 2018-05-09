/**
 * @flow
 * */
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './style.scss';

type BreadcrumbProps = {
  links: Link[],
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { links = [] } = props;

  return (
    <div className="eels-breadcrumb">
      {links.map((link, index) => (
        <Link
          key={index}
          className={cx(
            'eels-breadcrumb-link',
            link.active && 'eels-breadcrumb-link--active',
            link.disabled && 'eels-breadcrumb-link--disabled'
          )}
          to={link.url}
        >
          <span>{link.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;
