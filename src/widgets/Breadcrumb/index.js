/**
 * @flow
 * */
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import type { Dom } from 'types/Dom';
import './style.scss';

type BreadcrumbLink = {
  text: string,
  url: string,
  active?: boolean,
  disabled?: boolean,
};

type BreadcrumbProps = {
  links: Link[],
  breadcrumbType?: string,
} & Dom;

export const BREADCRUMB_TYPE = {
  NAV: 'nav',
  LOCATION: 'location',
};

const Breadcrumb = (props: BreadcrumbProps) => {
  const { links = [], breadcrumbType, className } = props;

  return (
    <div className={cx('eels-breadcrumb', className)}>
      {links.map((link, index) => (
        <Link
          key={index}
          className={cx(
            'eels-breadcrumb-link',
            (link.active || window.location.pathname === link.url) &&
              'eels-breadcrumb-link--active',
            link.disabled && 'eels-breadcrumb-link--disabled',
            breadcrumbType && `eels-breadcrumb-link--${breadcrumbType}`
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
