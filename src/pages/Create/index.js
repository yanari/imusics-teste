import React, { useEffect, useState } from 'react';
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
  const [categories, setCategories] = useState();
  const { errors, handleSubmit, register } = useForm();

  useEffect(() => {
    login();
  }, []);

  const onSubmit = async ({ title, description }) => {
    console.log(categories);
    const response = await createTicket(title, description, categories);
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
        label="Categoria"
        name="category"
        handleSelectedTags={(tags) => setCategories(tags)}
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
