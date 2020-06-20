import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  Tilte,
  SubmitButton,
  ErroMsg,
} from './styles';

/**
 * Componente de Formulario de login.
 */
function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('Obrigatório'),
      password: Yup.string()
        .min(8, 'Mínimo de 8 caracteres')
        .required('Obrigatório')
    })
  });

  /**
   * Trata o evento de Submit.
   * @param {*} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formik.values));
  }

  return (
    <Container>
      <Tilte>
        Login
      </Tilte>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <ErroMsg>{formik.errors.email}</ErroMsg>
        ) : null}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="senha"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <ErroMsg>{formik.errors.password}</ErroMsg>
        ) : null}
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
    </Container>
  );
}

export default LoginForm;