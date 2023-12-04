import { Link } from "react-router-dom";


export default function CarCard ({_id,model,year,color,price,imageUrl}) {


          return(
        <div className="container">
 <div className="wrapper">
                <img src={imageUrl} width={400} height={300} class="center"></img>
   <h1> {model}</h1>
   <h1 class="center">{price}$</h1>
  </div>
  <div className="button-wrapper"> 
  <Link to={`/catalog/${_id}/details`}><button className="btn outline">DETAILS</button></Link>
  </div>
    </div>

          )
}