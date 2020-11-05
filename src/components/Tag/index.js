import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCloseButton,
  StyledTag,
} from './styles';

const Tag = (props) => {
  const {
    tagName,
    handleDelete,
  } = props;
  return (
    <StyledTag>
      {tagName}
      {handleDelete && (
        <StyledCloseButton
          onClick={() => handleDelete(tagName)}
        >
          x
        </StyledCloseButton>
      )}
    </StyledTag>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
};

export default Tag;