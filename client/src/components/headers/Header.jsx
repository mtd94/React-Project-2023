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
				<li><a href="#"><span className="user">user</span></a></li>
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
				<li className="active"><a href="#" className="catalog">CATALOG </a>
				</li>
				<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sell Cars</a>
				</li>
				<li>
					<a href="#">Create car</a>
 
				</li>
			</ul>
		</div>
</div>
    )
}
export default Header;