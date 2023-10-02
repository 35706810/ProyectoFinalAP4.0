import React, { useState } from 'react';

function InicioSesion({ onInicioSesion }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleInicioSesion = () => {
    // Simulamos el inicio de sesión con cualquier usuario y contraseña
    const datosUsuario = {
      usuario: usuario,
      contrasena: contrasena
    };
    onInicioSesion(datosUsuario);
  };

  return (
    <div className="card p-4">
      <h2 className="mb-3">Iniciar Sesión</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      <button onClick={handleInicioSesion} className="btn btn-primary">
        Iniciar Sesión
      </button>
    </div>
  );
}

export default InicioSesion;

