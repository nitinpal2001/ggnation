import React from 'react'
import Logo from '../assets/logo.png'
import MenuIcon from '../assets/menuicon.svg'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={Logo} alt="not found" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " aria-current="page" href="#">Company</a>
        <a className="nav-link" href="#">Latest</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#"><img src={MenuIcon} alt="menu" /></a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
