

import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

const formSchema = Yup.object({
    firstName: Yup.string()
        .trim()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .trim()
        .required('Required'),
    email: Yup.string()
        .trim()
        .email('Invalid email address')
        .required('Required'),
});

export const FormikYupPage = () => {
    const { errors, touched, handleSubmit, handleReset, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: formSchema,
    });


    return (
        <div>
            <h1>Formik Basic Form</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="first-name">Firs Name</label>
                <input
                    id="first-name"
                    {...getFieldProps('firstName')}
                    type="text"
                    className={touched.firstName && errors.firstName ? 'has-error' : ''}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="last-name">Last Name</label>
                <input
                    id="last-name"
                    {...getFieldProps('lastName')}
                    type="text"
                    className={touched.lastName && errors.lastName ? 'has-error' : ''}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Adress</label>
                <input
                    id="email"
                    {...getFieldProps('email')}
                    type="email"
                    className={touched.email && errors.email ? 'has-error' : ''}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}


                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>

            </form>
        </div>
    );
}
