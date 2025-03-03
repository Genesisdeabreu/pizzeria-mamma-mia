import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PublicRoute = ({ children }) => {
  const { token } = useAuth();
  
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};