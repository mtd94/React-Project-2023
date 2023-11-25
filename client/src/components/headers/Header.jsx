import {Link} from 'react-router-dom';

const Header = () => {
    return (
<div className="allcontain">
	<div className="header">
			<ul className="socialicon">
				<li><a href="#"><i className="fa fa-facebook"></i></a></li>
				<li><a href="#"><i className="fa fa-twitter"></i></a></li>
				<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
				<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
			</ul>
			<ul className="givusacall">
				<li>Give us a call : +66666666 </li>
			</ul>
			<ul className="logreg">
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/register">Register</Link></li>
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
				<li><Link to="/search">SEARCH</Link></li>
				<li><Link to="/create-car">Create car</Link></li>
				
			</ul>
		</div>
</div>
    )
}
export default Header;