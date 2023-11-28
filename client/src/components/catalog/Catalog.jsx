import { useEffect, useState } from 'react';

import * as carService from '../../services/carService';
import CarCard from './car-card/CarCard';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div class="cars">
	<div class="feturedsection">
		<h1 class="text-center">CATALOG</h1>
	</div>

            {cars.map(car => (
                <CarCard key={car._id} {...car} />
            ))}

            {cars.length === 0 && (
                <h4 className="no-elements">NO CAR COLLECTION FOUND...</h4>
            )}
            </div>
    );
}