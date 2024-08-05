import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Register.css';

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', rePassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values.rePassword) {
            return setError('Password missmatch!');
        };

        try {
            await register(values.email, values.password);

            navigate('/');
        } catch (err) {
            setError(err.message);
        };
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler);

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-left mb-5" style={{ maxWidth: '500px' }}>
                        <h1 className="display-5">Register</h1>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="bg-primary h-100 p-5">
                                <form onSubmit={submitHandler}>
                                    <div className="row g-3">

                                        <div className="col-12">
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                className="form-control bg-light border-0 px-4"
                                                style={{ height: '55px' }}
                                                type="email"
                                                name="email"
                                                id='email'
                                                value={values.email}
                                                onChange={changeHandler}
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password">Password:</label>
                                            <input
                                                className="form-control bg-light border-0 px-4"
                                                style={{ height: '55px' }}
                                                type="password"
                                                name="password"
                                                id='password'
                                                value={values.password}
                                                onChange={changeHandler}
                                                placeholder="******"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="rePassword">Repeat Password:</label>
                                            <input
                                                className="form-control bg-light border-0 px-4"
                                                style={{ height: '55px' }}
                                                type="password"
                                                name="rePassword"
                                                id='rePassword'
                                                value={values.rePassword}
                                                onChange={changeHandler}
                                                placeholder="******"
                                            />
                                        </div>
                                        {error && (
                                            <p>
                                                <span style={{ color: 'red', fontSize: "18px" }}>{error}</span>
                                            </p>
                                        )}
                                        <div className="col-3">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Register</button>
                                        </div>
                                        <p className="field">
                                            <span>If you already have a profile click <Link className='tag' to="/login">here</Link> !</span>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}