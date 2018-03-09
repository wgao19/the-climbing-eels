/**
 * @flow
 * @jsx h
 * */

import { h, Component } from 'preact';
import { Link } from 'preact-router';
import cx from 'classnames';
import './style.scss';

type BreadcrumbProps = {
  links: Link[],
};
class Breadcrumb extends Component {
  render(props: BreadcrumbProps) {
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
            href={link.url}
          >
            <span>{link.text}</span>
          </Link>
        ))}
      </div>
    );
  }
}

export default Breadcrumb;
