import * as carService from '../../services/carService'
import { useNavigate } from 'react-router-dom';

export default function Create () {
	const navigate = useNavigate();
    
    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.create(carData);
            navigate('/catalog');
        } catch (err) {
        console.log(err)
        }
    }

    return (
        <div className="container">
	            <form id="create" onSubmit={createCarSubmitHandler}>
	<div className="create-car">
						<h1>Create car</h1>
							<div className="form-group group-coustume">
								<input type="text" className="form-control model-form" placeholder="Model"/>
								<input type="text" className="form-control color-form" placeholder="Color"/>
								<input type="text" className="form-control price-form" placeholder="Price"/>
								<input type="text" className="form-control image-form" placeholder="ImageUrl"/>
								<input className="btn submit" type="submit" value="Create Car" />
							</div>
					
                   
                    </div>
					</form>
                    </div>
    )
}