import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Navbar() {
  var isLogin = false;

  return (
    <header className="px-5 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom" style={{height:"10vh"}}>
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <span className="badge bg-success fs-5">GOFITZ</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Reservasi</a></li>
        <li><a href="#" className="nav-link px-2 link-body-emphasis">About</a></li>
      </ul>

      <div className={isLogin ? "col-md-3 text-end d-none" : "col-md-3 text-end"}>
        <button type="button" className="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#modalLogin">Login</button>
        <Login />
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSignIn">Sign-up</button>
        <Register />
      </div>
      
      <div className={isLogin ? " col-md-3" : "col-md-3 d-none"}>
        <div className="dropdown text-end d-inline">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small" >
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;