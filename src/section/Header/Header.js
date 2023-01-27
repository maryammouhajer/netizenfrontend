import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import polygon from '../../assets/images/polygon.png'
import { NavItem } from '../../components'
function Header() {
  return (
    <nav className='navbar navbar-light navbar-expand-md'  >
      
        <div className="container-fluid">

          <img src={logo} alt="" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse netizen-navbar" id="navbarNavDropdown">

            <img src={polygon} alt="polygon" />
            <img src={polygon} alt="polygon" />
            <img src={polygon} alt="polygon" />
            <div className="collapse navbar-collapse nav-link" id="mainmenu">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-center">
                <NavItem>
                  <a href='/'>Home</a>
                </NavItem>
                <NavItem>
                  <a href='/about'>About us</a>

                </NavItem>
                <NavItem>
                  <a href='/services'>Services</a>

                </NavItem>
                <NavItem>
                  <a href='/team'>Team</a>

                </NavItem>

                <li>
                  <a href='/clients'>Clients</a>

                </li>

                <NavItem>
                  <a href='/projects'>Projects</a>

                </NavItem>
                <NavItem>
                  <a href='/support'>Support & Help</a>

                </NavItem>
                <br /> <br />
                <NavItem>
                  <a href='/myProjects'>My Projects</a>

                </NavItem>
                <NavItem>
                  <a href='/chat'>Chat</a>

                </NavItem>
                <NavItem>
                  <a href='/contract'>Contract</a>

                </NavItem>
                <NavItem>
                  <a href='/myAccount'>My Account</a>

                </NavItem>
              </ul>

            </div>
          </div>
        </div>

      
    </nav>
  )
}

export default Header