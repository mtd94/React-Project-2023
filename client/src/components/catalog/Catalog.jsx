import { useEffect, useState } from 'react';

import * as carService from '../../services/carService';
import CarCard from './car-card/CarCard';

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err,err.message);
            });
    }, []);

    return (
        <section id="cars">
        <div className="cars">
		<h1 className="text-center">CATALOG</h1>

            {cars.map(car => (
                <CarCard key={car._id} {...car} />
            ))}

            {cars.length === 0 && (
                <h4 className="no-elements">NO CAR COLLECTION FOUND...</h4>
            )}
            </div>
            </section>
    );
}