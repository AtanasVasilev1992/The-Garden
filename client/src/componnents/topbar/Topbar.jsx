import { Link } from "react-router-dom";
import EnhancedNavbar from "../navbar/Navbar";

export default function Topbar() {
    return (
        <>
            <div className="container-fluid px-5 m-10 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-2" />
                            <h2 className="mb-0">+359 123 456 789</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <Link to="/" className="navbar-brand ms-lg-5">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">The</span>Garden</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-end">
                            <Link className="btn btn-primary btn-square rounded-circle me-2" to="/"><i className="fab fa-twitter" /></Link>
                            <Link className="btn btn-primary btn-square rounded-circle me-2" to="/"><i className="fab fa-facebook-f" /></Link>
                            <Link className="btn btn-primary btn-square rounded-circle me-2" to="/"><i className="fab fa-linkedin-in" /></Link>
                            <Link className="btn btn-primary btn-square rounded-circle" to="https://github.com/AtanasVasilev1992/The-Garden"><i className="fab fa-github" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <EnhancedNavbar />
        </>
    )
}