import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import FormContext from '../../../context';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { StyledForm } from '../styles';

const StepThree = ({ dispatch }) => {
  const { errors, handleSubmit, register } = useForm();
  const { step } = useContext(FormContext);

  const handleNextStep = ({ description }) => {
    dispatch({
      description,
      step: step + 1,
    });
  };

  if (step !== 3) return null;

  return (
    <StyledForm onSubmit={handleSubmit(handleNextStep)}>
      <Input
        name="description"
        error={errors.description}
        label="Descrição"
        inputRef={register({
          required: 'A descrição é obrigatória.',
        })}
        placeholder="Digite uma breve descrição do ticket"
      />
      <Button type="submit">
        Avançar
      </Button>
    </StyledForm>
  );
};

export default StepThree;
