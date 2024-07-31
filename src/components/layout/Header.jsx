import { useContext } from 'react';
import AuthContext from '../auth/useAuth.jsx';
import './Header.scss';

function Header(){
    // Initialisation -------------------------------------------
    const {loggedInUser} = useContext(AuthContext);
    // State ----------------------------------------------------
    // Handlers -------------------------------------------------
    // View -----------------------------------------------------
    return (
        <header>
            <h1>Basic React Demo</h1>
            {
                loggedInUser &&
                    <p className="welcome">Welcome {loggedInUser.UserFirstname}</p>
            }
        </header>
    );
}

export default Header;