import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useCreateVegetable } from "../../hooks/useVegetables";
import { useForm } from "../../hooks/useForm";
import { validateProductForm } from '../../utils/validationUtils';
import styles from '../../../css/AddProduct.module.css';

const initialValues = {
    title: '',
    imageUrl: '',
    description: ''
};

export default function AddVegetable() {
    const navigate = useNavigate();
    const createVegetable = useCreateVegetable();
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    const createHandler = async (values) => {
        // Reset errors
        setErrors({});
        setServerError('');

        // Validate form
        const validationErrors = validateProductForm(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const { _id: vegetableId } = await createVegetable(values);
            navigate(`/vegetables/${vegetableId}/details`);
        } catch (err) {
            setServerError(err.message);
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
                                            Add Vegetable
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={styles.infoSection}>
                            <h2 className={styles.infoTitle}>Add New Vegetable</h2>
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