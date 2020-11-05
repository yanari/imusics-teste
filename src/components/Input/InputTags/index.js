import React, { useState } from 'react';
import {
  StyledInputTagsContainer,
  StyledInputTags,
  StyledTagList,
  StyledTag,
  StyledInputTagsLabel,
} from './styles';

const InputTags = ({ initialTags, inputName, inputLabel }) => {
  const [tags, setTags] = useState(initialTags);
  console.log(tags);
  const handleKeyPress = (event) => {
    if (event.key === ',') {
      setTags([
        ...tags,
        event.target.value,
      ]);
      event.target.value = '';
    }
    // converter componente pra classe
    // event.target.value = ''; no callback function do setState ou usar o form hook?
    if (event.key === 'Backspace' && event.target.value === '' && tags.length > 0) {
      const filteredTags = tags.slice(0, -1);
      setTags(filteredTags);
    }
  };

  return (
    <>
      {inputLabel && <StyledInputTagsLabel>{inputLabel}</StyledInputTagsLabel>}
      <StyledInputTagsContainer>
        {tags && (
          <StyledTagList>
            {tags.map(tag => <StyledTag key={tag}>{tag}</StyledTag>)}
          </StyledTagList>
        )}
        <StyledInputTags
          label={inputLabel}
          name={inputName}
          onKeyDown={handleKeyPress}
        />
      </StyledInputTagsContainer>
    </>
  );
};

InputTags.defaultProps = {
  initialTags: [],
};

export default InputTags;
