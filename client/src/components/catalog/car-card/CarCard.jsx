import { Link } from "react-router-dom";

export default function CarCard  ({
    _id,
    model,
    color,
    price,
    image
}) {
    return(
    
        <div className="all-cars">
            <div className="allcars-info">
                <img src={image} />
                <h6>{model}</h6>
                <h2>{color}</h2>
                <h2>{price}</h2>
                <Link to={`/cars/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}