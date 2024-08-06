import { Link } from "react-router-dom";

export default function VegetableCard() {
    return (
        <>
            <div className="col-lg-4">
                <div className="blog-item position-relative overflow-hidden">
                    <div>
                    <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                        <Link className="blog-overlay" to={'/'}>
                            <h4 className="text-white">Title</h4>
                            <p style={{color: '#f93'}}>Vegetables</p>
                            <p className="text-white fw-bold">More details</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}