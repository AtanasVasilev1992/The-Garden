import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <>
        <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Vegetables</h3>
                                <p className="text-white">Learn more about your favorite vegetables!</p>
                                <Link className="text-white fw-bold" to={"/vegetables"}>Read More<i className="bi bi-arrow-right ms-2" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Fruits</h3>
                                <p className="text-white">Learn more about your favorite fruits!</p>
                                <Link className="text-white fw-bold" to={"/fruits"}>Read More<i className="bi bi-arrow-right ms-2" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}