import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Layout.scss';ru

function Layout (props) {
    // Initialisation -------------------------------------------
    // State ----------------------------------------------------
    // Handlers -------------------------------------------------
    // View -----------------------------------------------------
    return(
        <div className="layout">

        <Header/>
        <Navbar/>
        <main>
            {
                props.children
            }
        </main>
  
        <Footer />
  
      </div>
    );
}

Header.propTypes = {
    loggedInUser: PropTypes.string.isRequired,
};

export default Layout;