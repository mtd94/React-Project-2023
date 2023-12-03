import { Link } from "react-router-dom";

export default function CarCard  ({
    _id,
    model,
    year,
    color,
    price,
    imageUrl
}) {
    return(
        <div class="container">
 <div class="wrapper">
   <img src={imageUrl} width={400} height={300}></img>
   <h1> {model}</h1>
   <p>Lorem ipsum dolor sit amet, <br/>
     consectetur adipiscing elit.</p>
  </div>
  <div class="button-wrapper"> 
  <Link to={`/catalog/${_id}/details`}><button class="btn outline">DETAILS</button></Link>
    <button class="btn fill">BUY NOW</button>
  </div>
    </div>

    )
}