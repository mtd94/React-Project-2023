const Catalog = () => {
    return (
        <div className="allcontain">
	<div className="catalog">
		<h1 className="text-center"><span className="bdots"></span>CATALOG</h1>
	</div>
	<div className="feturedimage">
		<div className="row firstrow">
			<div className="col-lg-6 costumcol colborder1">
				<div className="row costumrow">
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img1colon">
						<img src="image/featurporch.jpg" alt="porsche"/>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon ">
						<div className="featurecontant">
							<h1>LOREM IPSUM</h1>
							<p>Color: Grey</p>
			 				<h2>Price: 23345 &euro;</h2>
			 				<button id="btn" onclick="rmtxt()">DETAILS</button>
							 
			 				</div>
						</div>
					</div>
				</div>
			</div>
            </div>
            </div>
           
    )
}
export default Catalog;