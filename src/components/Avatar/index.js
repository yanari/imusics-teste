import React from 'react';
import PropTypes from 'prop-types';

import { StyledAvatar } from './styles';

const Avatar = (props) => {
  const {
    thumbUrl,
    name,
    avatarName,
  } = props;
  return thumbUrl ? (
    <StyledAvatar
      src={thumbUrl}
      alt={name}
    />
  ) : (
    <StyledAvatar as="div" initials>
      {avatarName}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  thumbUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatarName: PropTypes.string,
};

export default Avatar;
