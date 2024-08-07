import { Link, useNavigate, useParams } from "react-router-dom"

import { useGetOneFruits } from "../../hooks/useFruits";
import { useForm } from "../../hooks/useForm";
import fruitsApi from "../../api/fruits-api";
import { useAuthContext } from "../../context/authContext";
import { useCreateFruitComment, useGetAllFruitComennts } from "../../hooks/useComment";

const initialValues = {
    comment: ''
}


export default function DetailsFruit() {
    const navigate = useNavigate();
    const { fruitId } = useParams();
    const [comments, dispatchComments] = useGetAllFruitComennts(fruitId)
    const createComment = useCreateFruitComment();
    const { isAuthenticated, email, userId } = useAuthContext()
    const [fruit] = useGetOneFruits(fruitId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(fruitId, comment);

            dispatchComments({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } })
        } catch (err) {
            console.log(err.message);

        }
    });

    const isOwner = userId === fruit._ownerId;

    const fruitDeleteHandler = async () => {
        const isConfirm = confirm(`Are you sure you want delete fruit: ${fruit.title} ?`);

        if (!isConfirm) {
            return
        };

        try {
            await fruitsApi.remove(fruitId);

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

                        <div className="mb-5" style={{ border: '2px solid #f93', padding: '2em'}}>
                            <div className="row g-5 mb-5">
                                <div className="col-md-6">
                                    <img className="img-fluid w-100" src={fruit.imageUrl} alt="This is fruit" />
                                </div>
                            </div>
                            <h1 className="mb-4">{fruit.title}</h1>
                            <p>{fruit.description}</p>
                            {isOwner &&
                                (<div >
                                    <Link to={`/fruits/${fruitId}/edit`} className="btn btn-primary py-md-3 px-md-5 me-3">Edit</Link>
                                    <Link to="#" className="btn btn-secondary py-md-3 px-md-5" onClick={fruitDeleteHandler}>Delete</Link>
                                </div>
                                )}
                        </div>

                        <div className="mb-5">
                            <h2 className="mb-4">{comments.length} Comments</h2>
                            {comments?.map(comment => (
                            <div key={comment._id} className="d-flex mb-4" style={{ border: '1px solid #f93' }}>
                                <div className="ps-3">
                                    <h6><p>{comment.author.email} :</p></h6>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                            ))
                            }
                            {comments.length === 0 && <p>No comments.</p>}
                        </div>

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
                        
                    </div>
                </div>
            </div>
        </>
    )
}