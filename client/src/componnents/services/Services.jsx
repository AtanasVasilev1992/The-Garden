export default function Services() {
    return (
        <>
         <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                                <h1 className="display-5">The Garden</h1>
                            </div>
                            <p className="mb-4">This is an informational site about vegetables and fruits.</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-carrot display-1 text-primary mb-3" />
                                <h4>Fresh Vegetables</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item bg-light text-center p-5">
                                <i className="fa fa-apple-alt display-1 text-primary mb-3" />
                                <h4>Fresh Fruits</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}