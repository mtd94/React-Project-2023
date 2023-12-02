const Search = () => {
	

    return (
		<nav className="navbar navbar-default midle-nav">
        <div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed textcostume" data-toggle="collapse" data-target="#navbarmidle" aria-expanded="false">
						<h1>SEARCH TEXT</h1>
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarmidle">
				<div className="searchtxt">
					<h1>SEARCH CAR</h1>
				</div>
				<form className="navbar-form navbar-left searchformmargin" role="search">
					<div className="form-group">
						<input type="text" className="form-control searchform" placeholder="Enter Keyword"/>
					</div>
				</form>
					<li className="li-search"> <button className="searchbutton"><span className="glyphicon glyphicon-search "></span></button></li>
	
			</div>
			</nav>
    );
}
export default Search;