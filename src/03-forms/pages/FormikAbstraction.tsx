

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormikCheckbox, FormikSelect, FormikTextInput } from '../components/MyTextInput';
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

export const FormikAbstraction = () => {
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
                    <FormikTextInput name="firstName" label="First Name" />
                    <FormikTextInput name="lastName" label="Last Name" />
                    <FormikTextInput name="email" label="Email Address" type="email" />
                    <FormikSelect
                        name="jobType"
                        label="Job Type"
                        placeholder="Select a job type"
                        options={[
                            { value: 'full-time', label: 'Full-time' },
                            { value: 'part-time', label: 'Part-time' },
                            { value: 'contract', label: 'Contract' },
                            { value: 'internship', label: 'Internship' },
                        ]}
                    />
                    <FormikCheckbox name="terms" label="Terms and conditions" />


                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </Form>
            </Formik>
        </div>
    );
}
