import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { StyledForm } from './styles';

const Create = () => {
  const {
    errors,
    handleSubmit,
    register,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, errors);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="title"
        error={errors.title}
        label="Título"
        inputRef={register({
          required: 'O título é obrigatório.',
        })}
      />
      <Input
        name="category"
        error={errors.category}
        label="Categoria"
        inputRef={register({
          required: 'A categoria é obrigatória.',
        })}
      />
      <Button type="submit">
        Avançar
      </Button>
    </StyledForm>
  );
};

export default Create;
