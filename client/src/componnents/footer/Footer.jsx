import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-footer bg-primary text-white mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h4 className="text-white mb-4">Get In Touch</h4>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-white me-2" />
                                        <p className="text-white mb-0">123 Street, Varna, BG</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-white me-2" />
                                        <p className="text-white mb-0">the_garden@abv.bg</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-white me-2" />
                                        <p className="text-white mb-0">+359 123 456 789</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <Link className="btn btn-secondary btn-square rounded-circle me-2" to="/"><i className="fab fa-twitter" /></Link>
                                        <Link className="btn btn-secondary btn-square rounded-circle me-2" to="/"><i className="fab fa-facebook-f" /></Link>
                                        <Link className="btn btn-secondary btn-square rounded-circle me-2" to="/"><i className="fab fa-linkedin-in" /></Link>
                                        <Link className="btn btn-secondary btn-square rounded-circle" to="https://github.com/AtanasVasilev1992/The-Garden"><i className="fab fa-github" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <Link className="text-white mb-2" to="/"><i className="bi bi-arrow-right text-white me-2" />Home</Link>
                                        <Link className="text-white mb-2" to="/about"><i className="bi bi-arrow-right text-white me-2" />About Us</Link>
                                        <Link className="text-white mb-2" to="/vegetables"><i className="bi bi-arrow-right text-white me-2" />Vegetables</Link>
                                        <Link className="text-white mb-2" to="/fruits"><i className="bi bi-arrow-right text-white me-2" />Fruits</Link>
                                        <Link className="text-white mb-2" to="/services"><i className="bi bi-arrow-right text-white me-2" />Our Services</Link>
                                        <Link className="text-white mb-2" to="/team"><i className="bi bi-arrow-right text-white me-2" />Meet The Team</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-n5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                                <h4 className="text-white">Newsletter</h4>
                                <h6 className="text-white">Subscribe Our Newsletter</h6>
                                <p>Send your email</p>
                                <form action>
                                    <div className="input-group">
                                        <input type="email" className="form-control border-white p-3" placeholder="Your Email" />
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-0">© <Link className="text-secondary fw-bold" to="/">The Garden</Link>. All Rights Reserved. Designed by <Link className="text-secondary fw-bold" to="https://github.com/AtanasVasilev1992/The-Garden">Atanas Vasilev!</Link></p>
                </div>
            </div>
        </>
    )
}