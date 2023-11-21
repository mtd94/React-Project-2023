const Header = () => {
    return (
<div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/catalog">Catalog</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/add-car">Add Car</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/sell-cars">Sell Cars</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>

    )
}
export default Header;