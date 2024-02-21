import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <div className="d-flex justify-content-center mt-4">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FSD" className="nav-link" href="#">
                full stack development
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DS" className="nav-link" href="#">
                Data science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CS" className="nav-link" href="#">
                Cyber Security
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Career" className="nav-link" href="#">
                Career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;
 


      
    
      
    
     
    
