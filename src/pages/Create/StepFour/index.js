import React, { useState, useContext } from 'react';

import FormContext from '../../../context';
import Button from '../../../components/Button';
import InputFile from '../../../components/Input/InputFile';

import {
  StyledForm,
  StyledActionButtons,
} from '../styles';

import { awsApi } from '../../../api';

const StepFour = ({ dispatch }) => {
  const { step } = useContext(FormContext);
  const [file, setFile] = useState(null);

  const handleNextStep = () => {
    dispatch({
      done: true,
      file,
      step: step + 1,
    });
  };

  const handleFileInput = async (targetFile) => {
    const fileUrl = await awsApi.uploadFile(targetFile.name, targetFile);
    setFile(fileUrl);
  };

  if (step !== 4) return null;

  return (
    <StyledForm as="div">
      <StyledActionButtons>
        <InputFile
          handleInput={handleFileInput}
          label="Anexar arquivo"
          name="attachment"
        />
        <Button handleClick={handleNextStep}>
          Avançar
        </Button>
      </StyledActionButtons>
    </StyledForm>
  );
};

export default StepFour;
