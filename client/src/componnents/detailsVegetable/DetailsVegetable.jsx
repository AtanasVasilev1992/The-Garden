export default function DetailsVegetable() {
    return (
        <>
         <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        {/* Blog Detail Start */}
                        <div className="mb-5">
                            <div className="row g-5 mb-5">
                                <div className="col-md-6">
                                    <img className="img-fluid w-100" src="../../../img/blog-1.jpg" alt="" />
                                </div>
                            </div>
                            <h1 className="mb-4">Cucumber</h1>
                            <p>The best</p>
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
                        {/* Comment Form End */}
                    </div>
                </div>
            </div>
        </>
    )
}