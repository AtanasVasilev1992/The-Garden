import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import styles from './Login.module.css';

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
        <div className={styles.loginContainer}>
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-7">
                        <div className={styles.formSection}>
                            <form onSubmit={submitHandler}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="email">
                                            Email:
                                        </label>
                                        <input
                                            className={`form-control ${styles.formInput}`}
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            onChange={changeHandler}
                                            placeholder="email@example.com"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="password">
                                            Password:
                                        </label>
                                        <input
                                            className={`form-control ${styles.formInput}`}
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={values.password}
                                            onChange={changeHandler}
                                            placeholder="******"
                                        />
                                    </div>

                                    {error && (
                                        <div className="col-12">
                                            <p className={styles.errorMessage}>{error}</p>
                                        </div>
                                    )}

                                    <div className="col-3">
                                        <button className={`btn btn-secondary ${styles.submitButton}`} type="submit">
                                            Login
                                        </button>
                                    </div>

                                    <div className="col-12">
                                        <p>
                                            <span className={styles.labelClass}>
                                                If you don't have profile click{' '}
                                                <Link to="/register" className={styles.registerLink}>
                                                    here
                                                </Link>
                                                !
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={styles.infoSection}>
                            <h2 className={styles.infoTitle}>Login</h2>
                            <p className={styles.infoText}>This is login page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}