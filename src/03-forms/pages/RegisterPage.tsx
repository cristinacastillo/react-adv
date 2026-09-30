
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
import { SubmitEvent } from 'react';




export const RegisterPage = () => {


    const { name, email, password, password2, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',

    });


    const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
    };


    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={onSubmit} noValidate>
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Required</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}

                />
                {!isValidEmail(email) && <span>Invalid Email</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={onChange}

                />
                {password.trim().length < 6 && password.trim().length > 0 && <span>Min 6 chart.</span>}
                {password.trim().length <= 0 && <span>Required</span>}

                <input
                    type="password"
                    placeholder="Repeat Password"
                    name='password2'
                    value={password2}
                    onChange={onChange}

                />
                {password2.trim().length <= 0 && <span>Required</span>}
                {password !== password2 && <span>Identity passwords</span>}


                <button type="submit">Send</button>
                <button type="button" onClick={resetForm}>Reset form</button>

            </form>
        </div>
    )
}