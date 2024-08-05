import { Link } from "react-router-dom";

export default function Vegetables() {
    return (
        <>
            <div class="container-fluid bg-primary py-5 bg-hero mb-5">
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">Vegetables</h1>
                            <Link to="/" class="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                            <Link to="/vegetables/create" class="btn btn-secondary py-md-3 px-md-5">Add New</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}