import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas); 

function DynamicIcon({ name, prefix = "fas" }) {
  const iconDefinition = findIconDefinition({ prefix, iconName: name });
  return <FontAwesomeIcon icon={iconDefinition} />;
}




function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand">Zarea</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link d-flex align-items-center">
                   <DynamicIcon name="house" prefix="fa" /> 
                   <div className="mx-2">
Home
                   </div>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="About" className="nav-link d-flex align-items-center">
                <DynamicIcon name="address-card" prefix="fa" />
                <div className="mx-2">
                  About
                </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="Cart" className="nav-link d-flex align-items-center">
                <DynamicIcon name="cart-shopping" prefix="fa" /> 
                <div className="mx-2">
                  Cart
                </div>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#home"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#home">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#home">
                      Another action
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#home">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
