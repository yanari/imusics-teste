import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Tag from '../../Tag';
import {
  StyledInputTagsContainer,
  StyledInputTags,
  StyledTagList,
  StyledInputTagsLabel,
} from './styles';

const InputTags = (props) => {
  const {
    initialTags,
    label,
    name,
    handleSelectedTags,
    placeholder,
  } = props;
  const {
    register,
    watch,
    setValue,
  } = useForm();
  const [tags, setTags] = useState(initialTags);
  
  const handleChange = () => {
    const keyPressed = watch(name).slice(watch(name).length - 1);
    if (keyPressed === ',') {
      const tag = watch(name).slice(0, -1);
      addTag(tag);
    }
  };

  const addTag = (tag) => {
    setTags([ ...tags, tag ]);
    setValue(name, '');
    handleSelectedTags([ ...tags, tag ]);
  };

  const handleKeyDown = (event) => {
    const isBackspace = event.key === 'Backspace';
    const isEnter = event.key === 'Enter';
    if (isBackspace) {
      handleDeleteTag();
    }
    if (isEnter) {
      event.preventDefault();
      addTag(watch(name));
    }
  };

  const handleDeleteTag = (tagName) => {
    if (tagName) {
      const filteredTags = tags.filter(tag => tag !== tagName);
      setTags(filteredTags);
      return;
    }
    if (tags.length > 0 && watch(name) === '') {
      const filteredTags = tags.slice(0, -1);
      setTags(filteredTags);
    }
    handleSelectedTags(tags);
  };

  return (
    <>
      {label && <StyledInputTagsLabel>{label}</StyledInputTagsLabel>}
      <StyledInputTagsContainer>
        {(tags && tags.length > 0) && (
          <StyledTagList>
            {tags.map(tag => (
              <Tag
                key={tag}
                tagName={tag}
                handleDelete={handleDeleteTag}
              />
            ))}
          </StyledTagList>
        )}
        <StyledInputTags
          label={label}
          name={name}
          ref={register}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
      </StyledInputTagsContainer>
    </>
  );
};

InputTags.propTypes = {
  initialTags: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleSelectedTags: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

InputTags.defaultProps = {
  initialTags: [],
};

export default InputTags;
