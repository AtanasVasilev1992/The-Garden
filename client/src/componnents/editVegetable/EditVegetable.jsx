export default function EditVegetable() {
    return (
        <>
        <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="bg-primary h-100 p-5">
                                <form >
                                    <div className="row g-3">

                                        <div className="col-12">
                                            <label style={{ fontSize: "1.5em", color: '#f93' }} htmlFor="title">Title:</label>
                                            <input
                                                className="form-control bg-light border-0 px-4"
                                                style={{ height: '55px' }}
                                                type="text"
                                                name="title"
                                                id='title'
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
                                                placeholder="Description"
                                            ></textarea>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Add Vegetable</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-secondary h-100 p-5">
                                <h2 className="text-white mb-4">Edit Vegetable</h2>
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