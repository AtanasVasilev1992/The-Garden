

export default function About() {
    return (
        <>
        <div className="container-fluid about pt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                                <img className="img-fluid mt-auto mx-auto" src="img/about.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5">
                            <div className="mb-3 pb-2">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="display-5">Learn How To Produce Organic Food</h1>
                            </div>
                            <p className="mb-4">We will help you to learn how to produce organic food for your family</p>
                            <div className="row gx-5 gy-4">
                                <div className="col-sm-6">
                                    <i className="fa fa-seedling display-1 text-secondary" />
                                    <h4>100% Organic</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                                </div>
                                <div className="col-sm-6">
                                    <i className="fa fa-award display-1 text-secondary" />
                                    <h4>Award</h4>
                                    <p className="mb-0">Your healt is us best reward!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}