import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from '../../services/carService';
import AuthContext from "../../context/authContext";

import './Details.css'

export default function GameDetails() {
    const navigate = useNavigate();
    const {userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId)
            .then(setCar).
            catch(() =>(error.message))

        
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
                    <img class="center" src={car.imageUrl} width={500} height={300}/>
                    <h1>Model:{car.model}</h1>
                    <h1>Year:{car.year}</h1>
                    <h1>Color: {car.color}</h1>
                    <h1>Price:{car.price}</h1>

                {userId === car._ownerId && (
                    <div className="button-wrapper"> 
                      <Link to={`/${carId}/edit`}><button className="btn outline">EDIT</button></Link>
                        <button className="btn outletline" onClick={deleteButtonClickHandler}>DELETE</button>
                    </div>
                )}
        </section>
    )
}
