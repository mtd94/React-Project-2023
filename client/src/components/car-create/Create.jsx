import * as carService from '../../services/carService'
import { useNavigate } from 'react-router-dom';

export default function Create () {
	const navigate = useNavigate();
    
    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.entries(new FormData(e.currentTarget));

        try {
            await carService.create(carData)
            navigate('/catalog');
        } catch (err) {
        console.log(err,err.message)
        }
    }

    return (
        <section id="create">
            <form id="create" onSubmit={createCarSubmitHandler}>
        <div className="container">
                    <h1>Create Car</h1>
                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" placeholder="Audi.." />

                    <label htmlFor="model">Year:</label>
                    <input type="text" id="year" name="year" placeholder="Year.." />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" placeholder="White..." />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" min="1000" max="500000" placeholder="1000" />
                       <p></p>
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <input className="btn submit" type="submit" value="Create" />
                    </div>
                    </form>
                    </section>
    )
}