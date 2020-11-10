import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCloseButton,
  StyledTag,
} from './styles';

const Tag = (props) => {
  const {
    tagColor,
    tagName,
    handleDelete,
  } = props;
  return (
    <StyledTag tagColor={tagColor}>
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
  tagColor: PropTypes.string,
  tagName: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
};

export default Tag;