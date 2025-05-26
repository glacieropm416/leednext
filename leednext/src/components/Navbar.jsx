import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        <div className="logo">
          <h1>LEEDNEXT</h1>
        </div>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/problems" className="nav-link">Problems</Link></li>
          <li><Link to="/contest" className="nav-link">Contest</Link></li>
        </ul>

        <div className="actions">
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button>

          <Link to="/profile">
            <img src="profile.png" alt="profile" className="profile-img" />
          </Link>

          <button className="premium-btn">Go Premium</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
