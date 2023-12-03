import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from '../../services/carService';
import AuthContext from "../../context/authContext";

export default function GameDetails() {
    const navigate = useNavigate();
    const {userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);

        
    }, [carId]);


    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.model}`);

        if (hasConfirmed) {
            await carService.remove(carId);

            navigate('/catalog');
        }
    }
    
    return (
        <section id="car-details">
            <h1>Car Details</h1>
                    <img className="car-img" src={car.imageUrl} width={400} height={300}/>
                    <h1>Model:{car.model}</h1>
                    <h3>Year:{car.year}</h3>
                    <span className="color">Color: {car.color}</span>
                    <p className="type">Price:{car.price}</p>
                
                

                {userId === car._ownerId && (
                    <div className="buttons">
                      <button><a href={(`/${carId}/edit`)} className="button">Edit</a></button>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}
        </section>
    )
}