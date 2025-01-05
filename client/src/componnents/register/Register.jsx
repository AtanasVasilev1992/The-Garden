import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { validateRegisterForm } from '../../utils/validationUtils';
import styles from './Register.module.css';

const initialValues = { 
    email: '', 
    username: '', 
    password: '', 
    rePassword: '' 
};

export default function Register() {
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        // Reset previous errors
        setErrors({});
        setServerError('');

        // Form validation
        const validationErrors = validateRegisterForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setServerError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className={styles.registerContainer}>
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
                                            className={`form-control ${styles.formInput} ${errors.email ? 'is-invalid' : ''}`}
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={values.email}
                                            onChange={changeHandler}
                                            placeholder="email@example.com"
                                        />
                                        {errors.email && (
                                            <div className={styles.errorMessage}>
                                                {errors.email.join(', ')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="username">
                                            Name:
                                        </label>
                                        <input
                                            className={`form-control ${styles.formInput} ${errors.username ? 'is-invalid' : ''}`}
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={values.username}
                                            onChange={changeHandler}
                                            placeholder="Alex Ivanov"
                                        />
                                        {errors.username && (
                                            <div className={styles.errorMessage}>
                                                {errors.username.join(', ')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="password">
                                            Password:
                                        </label>
                                        <input
                                            className={`form-control ${styles.formInput} ${errors.password ? 'is-invalid' : ''}`}
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={values.password}
                                            onChange={changeHandler}
                                            placeholder="******"
                                        />
                                        {errors.password && (
                                            <div className={styles.errorMessage}>
                                                {errors.password.join(', ')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="rePassword">
                                            Repeat Password:
                                        </label>
                                        <input
                                            className={`form-control ${styles.formInput} ${errors.rePassword ? 'is-invalid' : ''}`}
                                            type="password"
                                            name="rePassword"
                                            id="rePassword"
                                            value={values.rePassword}
                                            onChange={changeHandler}
                                            placeholder="******"
                                        />
                                        {errors.rePassword && (
                                            <div className={styles.errorMessage}>
                                                {errors.rePassword.join(', ')}
                                            </div>
                                        )}
                                    </div>

                                    {serverError && (
                                        <div className="col-12">
                                            <div className={styles.serverError}>{serverError}</div>
                                        </div>
                                    )}

                                    <div className="col-3">
                                        <button className={`btn btn-secondary ${styles.submitButton}`} type="submit">
                                            Register
                                        </button>
                                    </div>

                                    <div className="col-12">
                                        <p>
                                            <span className={styles.labelClass}>
                                                If you already have a profile click{' '}
                                                <Link to="/login" className={styles.loginLink}>
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
                            <h2 className={styles.infoTitle}>Register</h2>
                            <div className="d-flex mb-4">
                                <p className={styles.infoText}>This is register page</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}