import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <Formik
      initalValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').max(12, 'Password must be at most 12 characters').required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form className={css.form}>
        <div className={css.label}>
          <Field className={css.input} type="email" name="email" placeholder="E-mail"/>
          <ErrorMessage name="email" component="div"/>
        </div>
        <div className={css.label}>
          <Field className={css.input} type="password" name="password" placeholder="Password"/>
          <ErrorMessage name="password" component="div"/>
        </div>

        <button type="submit" className={css.button_reg}>
          Login
        </button>
        <Link className={css.link} to='/register'>
          <button className={css.button_log}>
            Registration
          </button>
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;