import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    errors,
    handleSubmit,
    register,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input
        name="username"
        ref={register({
          required: 'Nome de usuário é obrigatório',
        })}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <label>Senha</label>
      <input
        name="password"
        type="password"
        ref={register({
          register: 'Senha é obrigatória',
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
