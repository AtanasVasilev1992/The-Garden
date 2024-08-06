import { Link } from "react-router-dom";
import Card from "./card/FruitCard";

export default function Fruits() {
    return (
        <>
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">Fruits</h1>
                            <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                            <Link to="/fruits/create" className="btn btn-secondary py-md-3 px-md-5">Add New</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }}>
                        <h6 className="text-primary text-uppercase">Fruits</h6>
                        <h1 className="display-5">This is catalog of added fruits</h1>
                    </div>
                    <div className="row g-5">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}