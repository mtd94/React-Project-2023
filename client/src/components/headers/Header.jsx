import {Link} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authContext'
import './Header.css'

export default function Header () {
	const {isAuthenticated,email
} = useContext(AuthContext);

    return (
<div className="allcontain">
	<div className="header">
			<ul className="socialicon">
				<li><a href="https://www.facebook.com/marketplace/category/cars/"><i className="fa fa-facebook"></i></a></li>
				<li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
				<li><a href="https://www.pinterest.com/uncrate/cars/"><i className="fa fa-pinterest"></i></a></li>
			</ul>
			<ul className="givusacall">
				{!isAuthenticated && (
					<li>WELCOME,GUEST</li>
				)}
				{isAuthenticated && (
			<li>WELCOME,{email}</li>
				)}
			</ul>
			<ul className="logreg">
			{!isAuthenticated && (
				<li><Link to="/login">Login</Link></li>
			)}
			{!isAuthenticated && (
				<li><Link to="/register">Register</Link></li>
			)}
				{isAuthenticated && (
				<li><Link to="/logout">Logout</Link></li>
)}
			</ul>
	</div>
		<div className="container">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed toggle-costume" data-toggle="collapse" data-target="#upmenu" aria-expanded="false">
					<span className="sr-only"> Toggle navigaion</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>

			</div>	 
		</div>
		<div className="collapse navbar-collapse" id="upmenu">
		
			<ul className="nav navbar-nav" id="navbarontop">
			
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/catalog">CATALOG </Link></li>
				{isAuthenticated && (
				<li><Link to="/create-car">Create car</Link></li>
				)}
				
			</ul>
		</div>
					
</div>
    )
}
