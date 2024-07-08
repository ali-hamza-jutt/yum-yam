import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext'; // Import useAuth hook

const LoginForm = () => {
  const { setIsAuthenticated, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
      setSubmitting(true);
      try {
        const response = await axios.post('http://localhost:5000/login', values);
        setStatus({ success: true });
        setIsAuthenticated(response.data.isAuthenticated);
        resetForm(); // Clear form fields
        navigate('/');
      } catch (error) {
        console.error(error);
        setStatus({ error: error.message || 'Error logging in' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    console.log(isAuthenticated); // Log isAuthenticated whenever it changes
  }, [isAuthenticated]); // Only run this effect when isAuthenticated changes

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
        className="sign-input"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        {...formik.getFieldProps('password')}
        className="sign-input"
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}

      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
