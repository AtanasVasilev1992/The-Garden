import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                <Link to="/" className="navbar-brand d-flex d-lg-none">
                    <h1 className="m-0 display-4 text-secondary"><span className="text-white">The</span>Garden</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/vegatables" className="nav-item nav-link">Vegetables</Link>
                        <Link to="/fruits" className="nav-item nav-link">Fruits</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/services" className="nav-item nav-link">Services</Link>
                        <Link to="/features" className="nav-item nav-link">Features</Link>
                        <Link to="/team" className="nav-item nav-link">Team</Link>
                        <Link to="/blog" className="nav-item nav-link">Blog</Link>
                        <Link to="/login" className="nav-item nav-link">Login</Link>
                        <Link to="/register" className="nav-item nav-link">Register</Link>
                        <Link to="/logout" className="nav-item nav-link">Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}