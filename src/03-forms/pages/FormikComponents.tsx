

import { ErrorMessage, Field, Form, Formik } from 'formik';
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
    jobType: Yup.string()
        .required('Select a job type'),
    terms: Yup.boolean()
        .oneOf([true], 'You must accept the terms'),
});

export const Formikcomponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={values => console.log(values)}
                validationSchema={formSchema}
            >
                <Form noValidate>
                    <label htmlFor="first-name">First Name</label>
                    <Field name="firstName">
                        {({ field, meta }: { field: object; meta: { touched: boolean; error?: string } }) => (
                            <input
                                {...field}
                                id="first-name"
                                type="text"
                                className={meta.touched && meta.error ? 'has-error' : ''}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="firstName" component="span" className="error-message" />


                    <label htmlFor="last-name">Last Name</label>
                    <Field name="lastName">
                        {({ field, meta }: { field: object; meta: { touched: boolean; error?: string } }) => (
                            <input
                                {...field}
                                id="last-name"
                                type="text"
                                className={meta.touched && meta.error ? 'has-error' : ''}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="lastName" component="span" className="error-message" />


                    <label htmlFor="email">Email Address</label>
                    <Field name="email">
                        {({ field, meta }: { field: object; meta: { touched: boolean; error?: string } }) => (
                            <input
                                {...field}
                                id="email"
                                type="email"
                                className={meta.touched && meta.error ? 'has-error' : ''}
                            />
                        )}
                    </Field>
                    <ErrorMessage name="email" component="span" className="error-message" />



                    <label htmlFor="job-type">Job Type</label>
                    <Field as="select" id="job-type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span" className="error-message" />



                    <label htmlFor="terms">
                        <Field id="terms" name="terms" type="checkbox" />
                        Terms and conditions
                    </label>
                    <ErrorMessage name="terms" component="span" className="error-message" />


                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </Form>
            </Formik>
        </div>
    );
}
