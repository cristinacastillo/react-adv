import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormikSelect, FormikTextInput } from '../components/MyTextInput';
import formJson from '../data/custom-form.json';

import '../styles/styles.css';

interface FieldConfig {
    type: string;
    name: string;
    placeholder: string;
    label: string;
    value: string;
    options?: { value: string; label: string }[];
    validation: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        email?: boolean;
        matches?: string;
    };
}

const fields: FieldConfig[] = formJson;

const initialValues = Object.fromEntries(
    fields.map(({ name, value }) => [name, value]),
);

const createFieldSchema = (validation: FieldConfig['validation']) => {
    let schema = Yup.string().trim();

    if (validation.minLength !== undefined) {
        schema = schema.min(validation.minLength, `Must be at least ${validation.minLength} characters`);
    }
    if (validation.maxLength !== undefined) {
        schema = schema.max(validation.maxLength, `Must be ${validation.maxLength} characters or less`);
    }
    if (validation.email) {
        schema = schema.email('Invalid email address');
    }
    if (validation.matches) {
        schema = schema.oneOf([Yup.ref(validation.matches)], 'Passwords must match');
    }
    if (validation.required) {
        schema = schema.required('Required');
    }

    return schema;
};

const dynamicFormSchema = Yup.object(Object.fromEntries(
    fields.map(({ name, validation }) => [name, createFieldSchema(validation)]),
));

const getInputType = (type: string): 'text' | 'email' | 'password' =>
    type === 'email' || type === 'password' ? type : 'text';

export const DynamicFormPage = () => (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={dynamicFormSchema}
            onSubmit={values => console.log(values)}
        >
            <Form noValidate>
                {fields.map(({ name, label, type, placeholder, options }) => (
                    <div key={name}>
                        {type === 'select' && options ? (
                            <FormikSelect
                                name={name}
                                label={label}
                                placeholder={placeholder}
                                options={options}
                            />
                        ) : (
                            <FormikTextInput
                                name={name}
                                label={label}
                                type={getInputType(type)}
                                placeholder={placeholder}
                            />
                        )}
                    </div>
                ))}

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </Form>
        </Formik>
    </div>
);
