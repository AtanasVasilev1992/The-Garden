import { Link } from "react-router-dom";
import { useState } from 'react';
import withAuth from "../../HOC/withAuth";
import styles from './Navbar.module.css';

function Navbar({ auth }) {
    const { isAuthenticated } = auth;
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbarContainer}`}>
            <div className="container">
                <Link to="/" className="navbar-brand d-flex d-lg-none">
                    <h1 className="m-0 display-4 text-secondary">
                        <span className="text-white">The</span>Garden
                    </h1>
                </Link>

                <button 
                    className={`navbar-toggler ${styles.navbarToggler}`}
                    type="button"
                    onClick={toggleNavbar}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: 'white' }} 
                >
                    <div className={styles.hamburgerIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} ${styles.navCollapse}`}>
                    <div className="navbar-nav mx-auto">
                        <Link to="/" className={styles.navLink} onClick={closeNavbar}>Home</Link>
                        <Link to="/about" className={styles.navLink} onClick={closeNavbar}>About</Link>
                        <Link to="/features" className={styles.navLink} onClick={closeNavbar}>Features</Link>
                        <Link to="/team" className={styles.navLink} onClick={closeNavbar}>Team</Link>
                        <Link to="/vegetables" className={styles.navLink} onClick={closeNavbar}>Vegetables</Link>
                        <Link to="/fruits" className={styles.navLink} onClick={closeNavbar}>Fruits</Link>
                        
                        {isAuthenticated ? (
                            <>
                                <Link to="/vegetables/create" className={styles.navLink} onClick={closeNavbar}>
                                    Add Vegetable
                                </Link>
                                <Link to="/fruits/create" className={styles.navLink} onClick={closeNavbar}>
                                    Add Fruit
                                </Link>
                                <Link to="/logout" className={styles.navLink} onClick={closeNavbar}>
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className={styles.navLink} onClick={closeNavbar}>
                                    Login
                                </Link>
                                <Link to="/register" className={styles.navLink} onClick={closeNavbar}>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

const EnhancedNavbar = withAuth(Navbar);

export default EnhancedNavbar;