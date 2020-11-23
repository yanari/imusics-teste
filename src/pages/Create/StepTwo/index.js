import React, { useState, useContext } from 'react';

import FormContext from '../../../context';
import InputTags from '../../../components/Input/InputTags';
import Button from '../../../components/Button';

import { StyledForm } from '../styles';

const StepTwo = ({ dispatch }) => {
  const { step } = useContext(FormContext);
  const [categories, setCategories] = useState([]);

  const handleNextStep = () => {
    dispatch({
      categories,
      step: step + 1,
    });
  };

  if (step !== 2) return null;

  return (
    <StyledForm as="div">
      <InputTags
        label="Categoria"
        name="category"
        handleSelectedTags={(tags) => setCategories(tags)}
        placeholder="Digite as categorias do ticket e as separe por vírgula"
      />
      <Button handleClick={handleNextStep}>
        Avançar
      </Button>
    </StyledForm>
  );
};

export default StepTwo;
