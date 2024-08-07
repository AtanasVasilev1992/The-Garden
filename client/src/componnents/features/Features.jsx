export default function Features() {
    return (
        <>
            <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
                <div className="container py-5 pb-lg-0">
                    <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: '500px' }}>
                        <h6 className="text-uppercase text-secondary">Features</h6>
                        <h1 className="display-5 text-white">Why choose us?</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-seedling fs-4 text-white" />
                                </div>
                                <h4 className="text-white">100% Organic</h4>
                                <p className="mb-0">We will help you learn how to produce organic food for your family.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                                <p>We will help you to learn how to produce organic food for your family.</p>
                                <img className="img-fluid" src="img/feature.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-white">
                                <div className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-award fs-4 text-white" />
                                </div>
                                <h4 className="text-white">Award Winning</h4>
                                <p className="mb-0">Your health is our biggest reward!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}