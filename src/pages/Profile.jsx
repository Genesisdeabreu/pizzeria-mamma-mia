import React from 'react';

const Profile = () => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <h2 className="card-title mb-4">Perfil de Usuario</h2>
                <div className="mb-4">
                  <h5>Email:</h5>
                  <p className="text-muted">genesisdabreu@gmail.com</p>
                </div>
                <button className="btn btn-danger">
                  Cerrar Sesión 🚪
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;