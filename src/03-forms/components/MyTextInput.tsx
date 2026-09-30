import { useField } from 'formik';

interface FormikTextInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
}

interface FormikSelectProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    placeholder: string;
}

interface FormikCheckboxProps {
    label: string;
    name: string;
}

export const FormikTextInput = ({ label, name, type = 'text', placeholder }: FormikTextInputProps) => {
    const [field, meta] = useField<string>(name);
    const hasError = meta.touched && Boolean(meta.error);

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={hasError ? 'has-error' : ''}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${name}-error` : undefined}
            />
            {hasError && <span id={`${name}-error`} className="error-message">{meta.error}</span>}
        </>
    );
};

export const FormikSelect = ({ label, name, options, placeholder }: FormikSelectProps) => {
    const [field, meta] = useField<string>(name);
    const hasError = meta.touched && Boolean(meta.error);

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select
                {...field}
                id={name}
                className={hasError ? 'has-error' : ''}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${name}-error` : undefined}
            >
                <option value="">{placeholder}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            {hasError && <span id={`${name}-error`} className="error-message">{meta.error}</span>}
        </>
    );
};

export const FormikCheckbox = ({ label, name }: FormikCheckboxProps) => {
    const [field, meta] = useField<boolean>({ name, type: 'checkbox' });
    const hasError = meta.touched && Boolean(meta.error);

    return (
        <>
            <label htmlFor={name}>
                <input
                    id={name}
                    type="checkbox"
                    name={field.name}
                    value="on"
                    checked={field.checked}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    className={hasError ? 'has-error' : ''}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? `${name}-error` : undefined}
                />
                {label}
            </label>
            {hasError && <span id={`${name}-error`} className="error-message">{meta.error}</span>}
        </>
    );
};