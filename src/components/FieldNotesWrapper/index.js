/**
 * @flow
 * wraps the pages that look like a field note
 */

import * as React from 'react';
import Breadcrumb, { BREADCRUMB_TYPE } from 'widgets/Breadcrumb';
import './style.scss';

type FieldNotesOptions = {
  locationLinks: Array<*>,
};
const FieldNotesWrapper = (
  WrappedComponent: React.Component<*, *, *>,
  { locationLinks }: FieldNotesOptions
) => {
  class FieldNotesComponent extends React.Component<*, *, *> {
    constructor(props: any) {
      super(props);
    }
    render() {
      const { ...restProps } = this.props;
      return (
        <div className="page-field-notes">
          <div className="page-field-notes__header">
            <Breadcrumb
              links={locationLinks}
              breadcrumbType={BREADCRUMB_TYPE.LOCATION}
            />
          </div>
          <WrappedComponent
            className="page-field-notes__content"
            {...restProps}
          />
          {/** TODO: move to footer */}
          <div className="page-field-notes__footer">us eels ♥ climbing</div>
        </div>
      );
    }
  }
  return FieldNotesComponent;
};

export default FieldNotesWrapper;
