import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import InputFile from '../../components/Input/InputFile';
import InputTags from '../../components/Input/InputTags';
import Button from '../../components/Button';

import {
  StyledForm,
  StyledActionButtons,
} from './styles';

import { octadeskApi, awsApi } from '../../api';

const Create = () => {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = async ({ title, description }) => {
    const response = await octadeskApi.createTicket(title, description, categories, file);
    localStorage.setItem('ID_REQUESTER', response.idRequester)
    history.push('/tickets');
  };

  const handleFileInput = async (targetFile) => {
    const fileUrl = await awsApi.uploadFile(targetFile.name, targetFile);
    setFile(fileUrl);
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
        placeholder="Digite o título do ticket"
      />
      <InputTags
        label="Categoria"
        name="category"
        handleSelectedTags={(tags) => setCategories(tags)}
        placeholder="Digite as categorias do ticket e as separe por vírgula"
      />
      <Input
        name="description"
        error={errors.description}
        label="Descrição"
        inputRef={register({
          required: 'A descrição é obrigatória.',
        })}
        placeholder="Digite uma breve descrição do ticket"
      />
      <StyledActionButtons>
        <InputFile
          handleInput={handleFileInput}
          label="Anexar arquivo"
          name="attachment"
        />
        <Button type="submit">
          Avançar
        </Button>
      </StyledActionButtons>
    </StyledForm>
  );
};

export default Create;
