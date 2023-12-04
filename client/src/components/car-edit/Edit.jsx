import { useNavigate, useParams } from 'react-router-dom';

import * as carService from '../../services/carService';
import { useEffect, useState } from 'react';

export default function Edit ()  {
	const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({
        model: '',
        year: '',
        color: '',
        price: '',
        imageUrl: '',
    });

	useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
    }, [carId]);

    const editCarSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.edit(carId, values);

            navigate('/catalog');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="allcontain">
	<div className="edit-car">
			<form id="edit" onSubmit={editCarSubmitHandler}>
						<h1>Edit car</h1>
						<label htmlFor="leg-model">Model:</label>
                    <input type="text" id="model" name="model" value={car.model} onChange={onChange} placeholder="Enter car model..." />

                    <label htmlFor="leg-model">Year:</label>
                    <input type="text" id="year" name="year" value={car.year} onChange={onChange} placeholder="Enter car model..." />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" value={car.color} onChange={onChange} placeholder="Enter car color..." />

                    <label htmlFor="levels">Price:</label>
                    <input type="text" id="price" name="price" value={car.price} onChange={onChange} min="100" placeholder="100" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={car.imageUrl} onChange={onChange} placeholder="Upload a photo..." />
					<input className="btn submit" type="submit" value="Save" />
					</form>
					</div>
					</div>
                        )
}