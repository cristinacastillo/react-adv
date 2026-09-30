import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

const registerSchema = Yup.object({
    name: Yup
        .string()
        .trim()
        .min(2, '2-15 characters')
        .max(15, '2-15 characters')
        .required('Required'),
    email: Yup
        .string()
        .trim()
        .email('Invalid Email')
        .required('Required'),
    password: Yup
        .string()
        .trim()
        .min(6, 'Min 6 characters')
        .required('Required'),
    password2: Yup
        .string()
        .trim()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
});

export const RegisterFormikPage = () => {
    const { errors, touched, handleSubmit, handleReset, getFieldProps } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password2: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: registerSchema,
    });

    return (
        <div>
            <h1>Register with Formik</h1>

            <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
                <label htmlFor="name">Name</label>
                <input
                    {...getFieldProps('name')}
                    id="name"
                    type="text"
                    className={touched.name && errors.name ? 'has-error' : ''}
                />
                {touched.name && errors.name && <span>{errors.name}</span>}

                <label htmlFor="email">Email</label>
                <input
                    {...getFieldProps('email')}
                    id="email"
                    type="email"
                    className={touched.email && errors.email ? 'has-error' : ''}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <label htmlFor="password">Password</label>
                <input
                    {...getFieldProps('password')}
                    id="password"
                    type="password"
                    className={touched.password && errors.password ? 'has-error' : ''}
                />
                {touched.password && errors.password && <span>{errors.password}</span>}

                <label htmlFor="password2">Repeat Password</label>
                <input
                    {...getFieldProps('password2')}
                    id="password2"
                    type="password"
                    className={touched.password2 && errors.password2 ? 'has-error' : ''}
                />
                {touched.password2 && errors.password2 && <span>{errors.password2}</span>}

                <button type="submit">Send</button>
                <button type="reset">Reset form</button>
            </form>
        </div>
    );
};
