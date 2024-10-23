import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { logout } from "../services/users";
import { AuthContext } from "../App";

function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const Navbar: React.FC = () => {
  const { isAuthenticated, setIsauthenticated } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then(() => {
      setIsauthenticated(false);
      deleteCookie("isLoggedIn");
      navigate("/");
    });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <ul className={styles.navLinks}>
        {isAuthenticated && (
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/company-profile" className={styles.navLink}>
              Company Profile
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/registered-users" className={styles.navLink}>
              Registered Users
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button className={styles.navbutton} onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
