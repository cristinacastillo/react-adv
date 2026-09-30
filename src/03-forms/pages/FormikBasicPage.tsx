

import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues): FormikErrors<FormValues> => {

        const errors: FormikErrors<FormValues> = {};

        if (!firstName.trim()) {
            errors.firstName = 'Required';
        } else if (firstName.trim().length >= 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Required';
        }

        if (!email.trim()) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const { handleChange, handleBlur, values, errors, touched, handleSubmit, handleReset } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validate,
    });


    return (
        <div>
            <h1>Formik Basic Form</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="first-name">Firs Name</label>
                <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className={touched.firstName && errors.firstName ? 'has-error' : ''}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="last-name">Last Name</label>
                <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className={touched.lastName && errors.lastName ? 'has-error' : ''}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Adress</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? 'has-error' : ''}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}


                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>

            </form>
        </div>
    );
}
