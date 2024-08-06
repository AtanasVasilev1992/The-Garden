import { Link } from "react-router-dom";
import Banner from "../banner/Banner";

export default function Home() {
    return (
        <>
        <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-start p-5" style={{ maxWidth: '900px' }}>
                                    <h3 className="text-white">Produces</h3>
                                    <h1 className="display-1 text-white mb-md-4">Organic Produces For Healthy Life</h1>
                                    <Link to={"/vegetables"} className="btn btn-primary py-md-3 px-md-5 me-3">Vegetables</Link>
                                    <Link to={"/fruits"} className="btn btn-secondary py-md-3 px-md-5">Fruits</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
        </>
    )
}