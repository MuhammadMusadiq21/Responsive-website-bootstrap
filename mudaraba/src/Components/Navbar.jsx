import React from "react";

const Navbar = () => {
  return (

   <nav className="navbar navbar-expand-lg bg-light pt-4 pb-4">
  <div className="container">
    <a className="navbar-brand fs-3 fw-semibold" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center ps-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Where we are
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Investors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sharaish</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bussiness</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Risk</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Media
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">Applications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">English</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
