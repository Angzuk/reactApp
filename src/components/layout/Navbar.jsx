import './Navbar.scss';

function Navbar() {
    return(
        <nav>
            <div className="navItem">
            <a to="/">Home</a>
            </div>

            <div className="navItem">
            <a to="/modules">Modules</a>
            </div>

            <div className="navItem">
            <a to="/students">Students</a>
            </div>
        </nav>
    );
}

export default Navbar;