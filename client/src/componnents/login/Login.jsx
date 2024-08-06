import { Link, useNavigate } from 'react-router-dom';

import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';


const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin()
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/')
        } catch (err) {
            setError(err.message);
        }
    };
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="bg-primary h-100 p-5">
                                <form onSubmit={submitHandler}>
                                    <div className="row g-3">

                                        <div className="col-12">
                                            <label style={{ fontSize: "1.5em", color: '#f93' }} htmlFor="email">Email:</label>
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
                                            <label style={{ fontSize: "1.5em", color: '#f93' }} htmlFor="password">Password:</label>
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
                                        {error && (
                                            <p>
                                                <span style={{ color: 'red', fontSize: "18px" }}>{error}</span>
                                            </p>
                                        )}
                                        <div className="col-3">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Login</button>
                                        </div>
                                        <p className="field">
                                            <span style={{ fontSize: "1.5em", color: '#f93' }}>If you don't have profile click <Link style={{ fontSize: "1em", color: '#F6FFF2' }} to="/register">here</Link> !</span>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-secondary h-100 p-5">
                                <h2 className="text-white mb-4" style={{textAlign: 'center'}}>Login</h2>
                                <div className="d-flex mb-4">
                                    <p className="text-white mb-4" >This is login page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}