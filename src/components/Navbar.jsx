import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Pizzería Mamma Mía!</a>
        <div className="d-flex">
          <button className="btn btn-outline-light me-2">🏠 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">🔓 Profile</button>
              <button className="btn btn-outline-light me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">🔐 Login</button>
              <button className="btn btn-outline-light me-2">🔐 Register</button>
            </>
          )}
          <button className="btn btn-outline-light">🛒 Total: ${total.toLocaleString()}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;