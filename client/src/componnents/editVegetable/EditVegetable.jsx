import { useNavigate, useParams } from "react-router-dom";
import { useGetOneVegetables } from "../../hooks/useVegetables";
import { useForm } from "../../hooks/useForm";
import vegetablesApi from "../../api/vegetables-api";


export default function EditVegetable() {
    const navigate = useNavigate();
    const { vegetableId } = useParams();
    const [vegetable, setVegetable] = useGetOneVegetables(vegetableId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(vegetable, async (values) => {
        await vegetablesApi.update(vegetableId, values);
        navigate(`/vegetables/${vegetableId}/details`);
    }, true);

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
                                                onChange={changeHandler}
                                                value={values.title}
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
                                                onChange={changeHandler}
                                                value={values.imageUrl}
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
                                                onChange={changeHandler}
                                                value={values.description}
                                                placeholder="Description"
                                            ></textarea>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Edit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-secondary h-100 p-5">
                                <h2 className="text-white mb-4">Edit {values.title}</h2>
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