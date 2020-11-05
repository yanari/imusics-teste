import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import InputTags from '../../components/Input/InputTags';
import Button from '../../components/Button';

import { StyledForm } from './styles';

import {
  login,
  createTicket,
} from '../../api';

const Create = () => {
  const history = useHistory();
  const { errors, handleSubmit, register } = useForm();

  useEffect(() => {
    const token = localStorage.getItem('OCTADESK_TOKEN');
    if (token === null) login();
  }, []);

  const onSubmit = async ({ title, category, description }) => {
    const response = await createTicket(title, description, category);
    localStorage.setItem('ID_REQUESTER', response.idRequester)
    history.push('/tickets');
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
      <InputTags
        inputLabel="Categoria"
        inputName="category"
      />
      <Input
        name="category"
        error={errors.category}
        label="Categoria"
        inputRef={register({
          required: 'A categoria é obrigatória.',
        })}
      />
      <Input
        name="description"
        error={errors.description}
        label="Descrição"
        inputRef={register({
          required: 'A descrição é obrigatória.',
        })}
      />
      <Button type="submit">
        Avançar
      </Button>
    </StyledForm>
  );
};

export default Create;
