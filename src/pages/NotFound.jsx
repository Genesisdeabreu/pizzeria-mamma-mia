import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">¡Página no encontrada!</h2>
          <p className="mb-4">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
          <Link to="/" className="btn btn-danger">
            Volver al inicio 🏠
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;