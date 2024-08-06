import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
        <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h2 className="display-1 text-white mb-md-4">This Page Is Not Found!</h2>
                            <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}