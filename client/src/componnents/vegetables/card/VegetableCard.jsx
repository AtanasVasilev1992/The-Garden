import { Link } from "react-router-dom";

export default function VegetableCard({
    _id,
    title,
    imageUrl,
}) {
    return (
        <>
            <div className="col-lg-4">
                <div className="blog-item position-relative overflow-hidden">
                    <div>
                        <img className="img-fluid" src={imageUrl} alt={title} style={{ width: "400px", height: "300px" }} />
                        <Link className="blog-overlay" to={`/vegetables/${_id}/details`}>
                            <h4 className="text-white">{title}</h4>
                            <p style={{ color: '#f93' }}>Vegetables</p>
                            <p className="text-white fw-bold">More details</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}