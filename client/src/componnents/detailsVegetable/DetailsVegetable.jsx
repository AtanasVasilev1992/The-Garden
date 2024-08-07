import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useGetOneVegetables } from "../../hooks/useVegetables";
import { useForm } from "../../hooks/useForm";
import vegetablesApi from "../../api/vegetables-api";
import { useCreateVegetableComment, useGetAllVegetableComennts } from "../../hooks/useComment";

const initialValues = {
    comment: ''
}

export default function DetailsVegetable() {
    const navigate = useNavigate();
    const { vegetableId } = useParams();
    const [comments, dispatchComments] = useGetAllVegetableComennts(vegetableId)
    const createComment = useCreateVegetableComment();
    const { isAuthenticated, email, userId } = useAuthContext()
    const [vegetable] = useGetOneVegetables(vegetableId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(vegetableId, comment);

            dispatchComments({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } })
        } catch (err) {
            console.log(err.message);

        }
    });

    const isOwner = userId === vegetable._ownerId;

    const vegetableDeleteHandler = async () => {
        const isConfirm = confirm(`Are you sure you want delete fruit: ${fruit.title} ?`);

        if (!isConfirm) {
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
                        <div className="mb-5" style={{ border: '2px solid #34AD54', padding: '2em' }}>
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
                            <h2 className="mb-4">{comments.length} Comments</h2>
                            {comments?.map(comment => (
                                <div key={comment._id} className="d-flex mb-4" style={{ border: '1px solid #34AD54' }}>
                                    <div className="ps-3">
                                        <h6><p>{comment.author.email} :</p></h6>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            ))
                            }
                            {comments.length === 0 && <p>No comments.</p>}
                        </div>
                        {/* Comment List End */}
                        {/* Comment Form Start */}
                        {isAuthenticated && (
                            <div className="bg-primary p-5">
                                <h2 className="text-white mb-4">Leave a comment</h2>
                                <form onSubmit={submitHandler}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <textarea
                                                className="form-control bg-white border-0"
                                                rows={5}
                                                name="comment"
                                                onChange={changeHandler}
                                                value={values.comment}
                                                placeholder="Comment"
                                            />
                                        </div>
                                        <div className="col-6">
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