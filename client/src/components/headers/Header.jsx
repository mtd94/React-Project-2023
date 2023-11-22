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
				<li><a href="#">Login </a> </li>
				<li><a href="#"><span className="register">Register</span></a></li>
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
				<a className="navbar-brand logo" href="#"><img src="image/logo1.png" alt="logo"/></a>
			</div>	 
		</div>
		<div className="collapse navbar-collapse" id="upmenu">
			<ul className="nav navbar-nav" id="navbarontop">
				<li className="active"><a href="/">HOME</a> </li>
				<li className="active">
					<a href="#" className="catalog"	role="button" aria-haspopup="true" aria-expanded="false">CATALOG <span className="caret"></span></a>
				</li>
				<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DEALERS <span className="caret"></span></a>
						<ul className="dropdown-menu dropdowncostume">
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="3">3</a></li>
						</ul>
				</li>
				<li>
					<a href="contact.html">CONTACT</a>
 
				</li>
				<button><span className="postnewcar">POST NEW CAR</span></button>
			</ul>
		</div>

<div className="allcontain">
	<div className="carousel slide" data-ride="carousel">
		<div className="carousel-inner " role="listbox">
			<div className="item active">
				<img src="image/oldcar.jpg" alt="oldcar"/>
				<div className="carousel-caption">
					
				</div>
			</div>
			<div className="item">
				<img src="image/porche.jpg" alt="porche"/>
				<div className="carousel-caption">
					<h2>Porche</h2>
						<p>Lorem ipsum dolor sit amet, consectetur ,<br/>
						sed do eiusmod tempor incididunt ut labore </p>
				</div>
			</div>
			<div className="item">
				<img src="image/benz.jpg" alt="benz"/>
				<div className="carousel-caption">
					<h2>Car</h2>
					<p>Lorem ipsum dolor sit amet, consectetur ,<br/>
						sed do eiusmod tempor incididunt ut labore </p>
				</div>
			</div>
		</div>
			
	</div>
</div>
</div>
    )
}
export default Header;