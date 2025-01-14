import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useGetOneFruits } from "../../hooks/useFruits";
import { useForm } from "../../hooks/useForm";
import { validateProductForm } from '../../utils/validationUtils';
import { useToast } from '../common/toast/Toast';
import { useLoading } from '../common/loading/Loading';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import fruitsApi from "../../api/fruits-api";
import styles from '../../../css/EditProduct.module.css';

const initialValues = {
    title: '',
    imageUrl: '',
    description: ''
};

export default function EditFruit() {
    const navigate = useNavigate();
    const { fruitId } = useParams();
    const [fruit, setFruit] = useGetOneFruits(fruitId);
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const toast = useToast();
    const { showLoading, hideLoading } = useLoading();

    const editHandler = async (values) => {
        setErrors({});
        setServerError('');

        const validationErrors = validateProductForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            showLoading();
            await fruitsApi.update(fruitId, values);
            toast('Fruit updated successfully!', 'success');
            navigate(`/fruits/${fruitId}/details`);
        } catch (err) {
            setServerError(err.message);
            toast(err.message, 'error');
        } finally {
            hideLoading();
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(fruit || initialValues, editHandler, true);

    if (!fruit) {
        return <LoadingSpinner />;
    }

    return (
        <div className={styles.editProductContainer}>
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
                                            placeholder="Image URL..."
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
                                            Edit Fruit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={styles.infoSection}>
                            <h2 className={styles.infoTitle}>Edit {values.title}</h2>
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