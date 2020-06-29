import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
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

  // Schema do Yup para validação dos campos.
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email inválido')
      .required('Obrigatório'),
    password: Yup.string()
      .required('Obrigatório')
  });

  /**
   * Trata o onSubmit.
   * @param {*} values 
   * @param {*} actions 
   */
  const handleSubmit = (values, actions) => {
    console.log(values);
  }

  return (
    <Container>
      <Tilte>
        Login
      </Tilte>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={handleSubmit}
        validateOnMount
        validationSchema={schema}
        render={({ values, isValid }) => (
          <Form>
            <Field name="email" type="email" placeholder="email" />
            <ErrorMessage name="email" component={ErroMsg} />
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage name="password" component={ErroMsg} />
            <SubmitButton type="submit" disabled={!isValid}>Enviar</SubmitButton>
          </Form>
        )} />
    </Container>
  );
}

export default LoginForm;