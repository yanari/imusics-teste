import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import InputTags from '../../components/Input/InputTags';
import Button from '../../components/Button';

import { StyledForm } from './styles';

import { octadeskApi, uploadFile } from '../../api';

const Create = () => {
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = async ({ title, description }) => {
    console.log(categories);
    const response = await octadeskApi.createTicket(title, description, categories);
    localStorage.setItem('ID_REQUESTER', response.idRequester)
    history.push('/tickets');
  };

  const handleFileInput = async (targetFiles) => {
    const file = targetFiles[0];
    const res = await uploadFile(file.name, file);
    console.log(res);
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
      <input type="file" onInput={(e) => handleFileInput(e.target.files)}/>
      <Button type="submit">
        Avançar
      </Button>
    </StyledForm>
  );
};

export default Create;
