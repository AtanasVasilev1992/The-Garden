export default function Team() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                        <h6 className="text-primary text-uppercase">The Team</h6>
                        <h1 className="display-5">We are experienced farmers</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="row g-0">
                                <div className="col-10">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                        <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                            <h4 className="text-white">Ivan Ivanov</h4>
                                            <span className="text-white">admin@abv.bg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="row g-0">
                                <div className="col-10">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                        <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                            <h4 className="text-white">Maria Georgieva</h4>
                                            <span className="text-white">maria@abv.bg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="row g-0">
                                <div className="col-10">
                                    <div className="position-relative">
                                        <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                                        <div className="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: 'rgba(52, 173, 84, .85)' }}>
                                            <h4 className="text-white">Petar Dimitrov</h4>
                                            <span className="text-white">petar@abv.bg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-twitter text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-facebook-f text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-linkedin-in text-secondary" /></a>
                                        <a className="btn btn-square rounded-circle bg-white" href="#"><i className="fab fa-instagram text-secondary" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}