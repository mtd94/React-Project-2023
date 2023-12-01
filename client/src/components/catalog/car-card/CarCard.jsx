import { Link } from "react-router-dom";

export default function CarCard  ({
    _id,
    model,
    year,
    color,
    price,
    imageUrl
}) {
    return(
    
        <div className="all-cars">
            <div className="allcars-info">
                <img src={imageUrl} />
                <h1>Model:{model}</h1>
                <h2>Year:{year}</h2>
                <h2>Color:{color}</h2>
                <h2>Price:{price}$</h2>
                <Link to={`/cars/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}