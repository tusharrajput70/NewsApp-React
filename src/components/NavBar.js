import React from 'react';
import { Link } from 'react-router-dom';

// export class NavBar extends Component
const NavBar=()=>
 {
  const hover = (id) => {
    document.getElementById("home").classList.remove("active");
    document.getElementById("business").classList.remove("active");
    document.getElementById("entertainment").classList.remove("active");
    document.getElementById("health").classList.remove("active");
    document.getElementById("science").classList.remove("active");
    document.getElementById("sports").classList.remove("active");
    document.getElementById("technology").classList.remove("active");

    document.getElementById(id).classList.add('active');
  }

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">FlashHive</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link id='home' className="nav-link active" aria-current="page" to="/" onClick={() => hover('home')}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link id='business' className="nav-link" to="/business" onClick={() => hover('business')}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link id='entertainment' className="nav-link" to="/entertainment" onClick={() => hover('entertainment')}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link id='health' className="nav-link" to="/health" onClick={() => hover('health')}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link id='science' className="nav-link" to="/science" onClick={() => hover('science')}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link id='sports' className="nav-link" to="/sports" onClick={() => hover('sports')}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link id='technology' className="nav-link" to="/technology" onClick={() => hover('technology')}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default NavBar;
