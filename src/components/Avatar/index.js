import React from 'react';
import PropTypes from 'prop-types';

import { StyledAvatar } from './styles';

const Avatar = (props) => {
  const {
    thumbUrl,
    name,
    avatarName,
    invisible,
  } = props;
  return thumbUrl ? (
    <StyledAvatar
      src={thumbUrl}
      alt={name}
      invisible={invisible}
    />
  ) : (
    <StyledAvatar
      as="div"
      initials
      invisible={invisible}
    >
      {avatarName}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  thumbUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatarName: PropTypes.string,
  invisible: PropTypes.bool,
};

export default Avatar;
