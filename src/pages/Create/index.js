import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import InputFile from '../../components/Input/InputFile';
import InputTags from '../../components/Input/InputTags';
import Button from '../../components/Button';

import { StyledForm } from './styles';

import { octadeskApi, awsApi } from '../../api';

const Create = () => {
  const history = useHistory();
  const [files, setFiles] = useState(null);
  const [categories, setCategories] = useState([]);
  const { errors, handleSubmit, register } = useForm();

  const onSubmit = async ({ title, description }) => {
    const response = await octadeskApi.createTicket(title, description, categories, files);
    localStorage.setItem('ID_REQUESTER', response.idRequester)
    history.push('/tickets');
  };

  const handleFileInput = async (targetFiles) => {
    const file = targetFiles[0];
    const fileUrl = await awsApi.uploadFile(file.name, file);
    setFiles(fileUrl);
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
      <div>
        <InputFile
          handleFileInput={(e) => handleFileInput(e.target.files)}
          label="Anexar arquivo"
          name="attachment"
        />
        <Button type="submit">
          Avançar
        </Button>
      </div>
    </StyledForm>
  );
};

export default Create;
