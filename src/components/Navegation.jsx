import { Link } from 'react-router-dom';

const Navegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mía!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Registro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-danger">
                Cerrar Sesión
              </button>
            </li>
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-outline-danger" to="/cart">
                🛒 Total: $25.000
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;