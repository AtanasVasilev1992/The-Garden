import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useGetOneVegetables } from "../../hooks/useVegetables";
import { useForm } from "../../hooks/useForm";
import vegetablesApi from "../../api/vegetables-api";

const initialValues = {
    comment: ''
}

export default function DetailsVegetable() {
    const navigate = useNavigate();
    const { vegetableId } = useParams();
    // const [commet, dispatchComments] = useGetAllComennts()
    // const createComment = useCreateComment();
    const { isAuthenticated, username, userId } = useAuthContext()
    const [vegetable] = useGetOneVegetables(vegetableId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(fruitId, comment);

            dispatchComments({ type: 'ADD_COMMENT', payload: { ...newComment, author: { username } } })
        } catch (err) {
            console.log(err.message);

        }
    });

    const isOwner = userId === vegetable._ownerId;

    const vegetableDeleteHandler = async () => {
        const isConfirm = confirm(`Are you sure you want delete vegetable: ${vegetable.title} ?`);

        if(!isConfirm) {
            return
        };

        try {
            await vegetablesApi.remove(vegetableId);

            navigate('/');
        } catch (err) {
            console.log(err.message);
            
        }
    };

    return (
        <>
         <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        {/* Blog Detail Start */}
                        <div className="mb-5" style={{border: '2px solid #34AD54', padding: '2em'}}>
                            <div className="row g-5 mb-5">
                                <div className="col-md-6">
                                    <img className="img-fluid w-100" src={vegetable.imageUrl} alt="This is vegetable" />
                                </div>
                            </div>
                            <h1 className="mb-4">{vegetable.title}</h1>
                            <p>{vegetable.description}</p>
                            {isOwner &&
                                (<div >
                                    <Link to={`/vegetables/${vegetableId}/edit`} className="btn btn-primary py-md-3 px-md-5 me-3">Edit</Link>
                                    <Link to="#" className="btn btn-secondary py-md-3 px-md-5" onClick={vegetableDeleteHandler}>Delete</Link>
                                </div>
                                )}
                        </div>
                        {/* Blog Detail End */}
                        {/* Comment List Start */}
                        <div className="mb-5">
                            <h2 className="mb-4">? Comments</h2>
                            <div className="d-flex mb-4">
                                <img
                                    src="../../../img/user.jpg"
                                    className="img-fluid"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="ps-3">
                                    <h6>
                                        <a href="">John Doe</a>{" "}
                                        <small>
                                            <i>01 Jan 2045</i>
                                        </small>
                                    </h6>
                                    <p>
                                        Mnogo qm!
                                    </p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                        </div>
                        {/* Comment List End */}
                        {/* Comment Form Start */}
                        {isAuthenticated && (
                        <div className="bg-primary p-5">
                            <h2 className="text-white mb-4">Leave a comment</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control bg-white border-0"
                                            placeholder="Your Name"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control bg-white border-0"
                                            placeholder="Your Email"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control bg-white border-0"
                                            rows={5}
                                            placeholder="Comment"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">
                                            Leave Your Comment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        )}
                        {/* Comment Form End */}
                    </div>
                </div>
            </div>
        </>
    )
}