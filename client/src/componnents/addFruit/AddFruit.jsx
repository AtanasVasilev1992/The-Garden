import { useNavigate } from 'react-router-dom'

import { useCreateFruit } from '../../hooks/useFruits';
import { useForm } from '../../hooks/useForm';


const initialValues = {
    title: '',
    imageUrl: '',
    description: ''
}

export default function AddFruit() {
    const navigate = useNavigate();
    const createFruit = useCreateFruit();

    const createHandler = async (values) => {
        try {
            const { _id: fruitId } = await createFruit(values);
            navigate(`/fruits/${fruitId}/details`);
        } catch (err) {
            console.log(err.message);
        }
    };

    const { values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

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
                                            <label style={{ fontSize: "1.5em", color: '#f93' }} htmlFor="title">Title:</label>
                                            <input
                                                className="form-control bg-light border-0 px-4"
                                                style={{ height: '55px' }}
                                                type="text"
                                                name="title"
                                                id='title'
                                                value={values.title}
                                                onChange={changeHandler}
                                                placeholder="Title..."
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label style={{ fontSize: "1.5em", color: '#f93' }} htmlFor="imageUrl">Image URL:</label>
                                            <input
                                                className="form-control bg-light border-0 px-4"
                                                style={{ height: '55px' }}
                                                type="text"
                                                name="imageUrl"
                                                id='imageUrl'
                                                value={values.imageUrl}
                                                onChange={changeHandler}
                                                placeholder="ImageUrl..."
                                            />
                                        </div>
                                        <div class="col-12">
                                            <label style={{ fontSize: "1.5em", color: '#f93' }} htmlFor="description">Description:</label>
                                            <textarea
                                                className="form-control bg-light border-0 px-4 py-3"
                                                rows="2"
                                                name="description"
                                                id="description"
                                                value={values.description}
                                                onChange={changeHandler}
                                                placeholder="Description"
                                            ></textarea>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Add Fruit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-secondary h-100 p-5">
                                <h2 className="text-white mb-4">Add New Fruit</h2>
                                <div className="d-flex mb-4">
                                    <p className="text-white mb-4">We appreciate your help</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}