import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">¡Página no encontrada! 🍕</h2>
      <p className="lead mb-4">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al Inicio 🏠
      </Link>
    </div>
  );
};

export default NotFound;