import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormComponent = ({ handleClose}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Required',)
        }),
        onSubmit: values => {
            alert('Subscription successful!');
            handleClose();  
        },
    });
  return (
    <div className='form-container'>
        <form onSubmit={formik.handleSubmit} aria-labelledby="modal-title">
            <h2 id='modal-title'>Subscribe to our Newsletter!</h2>
            <p id='modal-description'>Stay updated with our latest news.</p>
            <label htmlFor='email'>Email: </label>
            <input
                id='email'
                name='email'
                type='email'
                placeholder='Your email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className='error-message'>{formik.errors.email}</div>
            ) : null}
            <button type='submit'>Subscribe</button>
            <button type='button' onClick={handleClose}>Close</button>
        </form>
    </div>
  );
};

export default FormComponent;