import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from '../../services/carService';
import AuthContext from "../../context/authContext";
import useForm from '../../hooks/form';

export default function CarDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);


    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.title}`);

        if (hasConfirmed) {
            await carService.remove(carId);

            navigate('/catalog');
        }
    }
    return (
        <section id="car-details">
            <h1>car Details</h1>
            <div className="info-section">
                <div className="car-header">
                    <img className="car-img" src={car.imageUrl} alt={car.model} />
                    <h1>{car.model}</h1>
                    <span className="color">Color: {car.color}</span>
                    <p className="type">{car.price}</p>
                </div>
                </div>


                    <div className="buttons">
                        <Link to={('/catalog/:id/edit', { carId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
        </section>
    )
    })
}