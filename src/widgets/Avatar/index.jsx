// @flow
import * as React from 'react';
import { url as gravatar } from 'gravatar';
import type { ClimberType } from 'types/ClimbTypes';
import './style.scss';

const Avatar = ({ email, displayName }: ClimberType) => (
  <div className="eels-avatar">
    <img src={gravatar(email)} alt={displayName} />
  </div>
);
export default Avatar;
