import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import FormContext from '../../../context';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { StyledForm } from '../styles';

const StepOne = ({ dispatch }) => {
  const { step } = useContext(FormContext);
  const { errors, handleSubmit, register } = useForm();

  const handleNextStep = ({ title }) => {
    dispatch({
      title,
      step: step + 1,
    });
  };

  if (step !== 1) return null;

  return (
    <StyledForm onSubmit={handleSubmit(handleNextStep)}>
      <Input
        name="title"
        error={errors.title}
        label="Título"
        inputRef={register({
          required: 'O título é obrigatório.',
        })}
        placeholder="Digite o título do ticket"
      />
      <Button type="submit">
        Avançar
      </Button>
    </StyledForm>
  );
};

export default StepOne;
