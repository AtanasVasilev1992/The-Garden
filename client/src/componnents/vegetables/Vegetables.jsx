import { Link } from "react-router-dom";
import VegetableCard from "./card/VegetableCard";

export default function Vegetables() {
    return (
        <>
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div clasNames="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Vegetables</h1>
                            <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                            <Link to="/vegetables/create" className="btn btn-secondary py-md-3 px-md-5">Add New</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                        <h6 className="text-primary text-uppercase">Vegetatables</h6>
                        <h1 className="display-5">This is catalog of added vegetables</h1>
                    </div>
                    <div className="row g-5">
                        <VegetableCard/>
                        <VegetableCard/>
                        <VegetableCard/>
                        <VegetableCard/>
                        <VegetableCard/>
                        <VegetableCard/>
                    </div>
                </div>
            </div>
        </>
    )
}