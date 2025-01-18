import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useCreateFruit } from "../../hooks/useFruits";
import { useForm } from "../../hooks/useForm";
import { validateProductForm } from '../../utils/validationUtils';
import { useLoading } from "../common/loading/Loading";
import { useToast } from "../common/toast/Toast";
import styles from '../../../css/AddProduct.module.css';

const initialValues = {
    title: '',
    imageUrl: '',
    description: ''
};

export default function AddFruit() {
    const navigate = useNavigate();
    const createFruit = useCreateFruit();
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const { showLoading, hideLoading } = useLoading();
    const showToast = useToast();

    const createHandler = async (values) => {
        setErrors({});
        setServerError('');

        const validationErrors = validateProductForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            showLoading();
            const { _id: fruitId } = await createFruit(values);
            showToast('Fruit created successfully!', 'success');
            navigate(`/fruits/${fruitId}/details`);
        } catch (err) {
            setServerError(err.message);
            showToast(err.message, 'error');
        } finally {
            hideLoading();
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

    return (
        <div className={styles.addProductContainer}>
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-7">
                        <div className={styles.formSection}>
                            <form onSubmit={submitHandler}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="title">Title:</label>
                                        <input
                                            className={`form-control ${styles.formInput} ${errors.title ? 'is-invalid' : ''}`}
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={values.title}
                                            onChange={changeHandler}
                                            placeholder="Title..."
                                        />
                                        {errors.title && (
                                            <div className={styles.errorMessage}>
                                                {errors.title.join(', ')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="imageUrl">Image URL:</label>
                                        <input
                                            className={`form-control ${styles.formInput} ${errors.imageUrl ? 'is-invalid' : ''}`}
                                            type="text"
                                            name="imageUrl"
                                            id="imageUrl"
                                            value={values.imageUrl}
                                            onChange={changeHandler}
                                            placeholder="ImageUrl..."
                                        />
                                        {errors.imageUrl && (
                                            <div className={styles.errorMessage}>
                                                {errors.imageUrl.join(', ')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <label className={styles.labelClass} htmlFor="description">Description:</label>
                                        <textarea
                                            className={`form-control ${styles.textArea} ${errors.description ? 'is-invalid' : ''}`}
                                            rows="3"
                                            name="description"
                                            id="description"
                                            value={values.description}
                                            onChange={changeHandler}
                                            placeholder="Description"
                                        ></textarea>
                                        {errors.description && (
                                            <div className={styles.errorMessage}>
                                                {errors.description.join(', ')}
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
                                            Add Fruit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={styles.infoSection}>
                            <h2 className={styles.infoTitle}>Add New Fruit</h2>
                            <div className="d-flex mb-4">
                                <p className="text-white mb-4">We appreciate your help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}