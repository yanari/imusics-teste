import React, {
  useReducer,
  useContext,
  useState,
} from 'react';
import FormContext from '../../context';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { StyledLoadingIcon } from '../../styles';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import { octadeskApi } from '../../api';

const Create = () => {
  const form = useContext(FormContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer((state, action) => {
    return {
      ...state,
      ...action,
    };
  }, form);

  const onSubmit = async () => {
    dispatch({step: 1, done: false});
    setLoading(true);
    const response = await octadeskApi.createTicket(state);
    localStorage.setItem('ID_REQUESTER', response.idRequester);
    setLoading(false);
    history.push('/tickets');

  };

  if (loading) return <StyledLoadingIcon/>;

  return (
    <FormContext.Provider value={state}>
      <StepOne dispatch={dispatch}/>
      <StepTwo dispatch={dispatch}/>
      <StepThree dispatch={dispatch}/>
      <StepFour dispatch={dispatch}/>
      {state.done && (
        <Button
          handleClick={onSubmit}
          type="button"
        >
          Enviar
        </Button>
      )}
    </FormContext.Provider>
  );
};

export default Create;
