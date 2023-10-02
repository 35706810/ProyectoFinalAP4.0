import React, { useState } from 'react';

function Registro({ onRegistro }) {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    correo: '',
    contrasena: '',
  });

  const manejarRegistro = () => {
    // Aquí podrías realizar la lógica de validación y registro con el backend en una etapa posterior.
    // Por ahora, simplemente llamaremos a la función onRegistro con los datos del usuario.
    onRegistro(usuario);
  };

  return (
    <div className="card p-4">
      <h2 className="mb-3">Registro</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          placeholder="Apellido"
          value={usuario.apellido}
          onChange={(e) => setUsuario({ ...usuario, apellido: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dni">DNI</label>
        <input
          type="text"
          className="form-control"
          id="dni"
          placeholder="DNI"
          value={usuario.dni}
          onChange={(e) => setUsuario({ ...usuario, dni: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          placeholder="Correo electrónico"
          value={usuario.correo}
          onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="contrasena"
          placeholder="Contraseña"
          value={usuario.contrasena}
          onChange={(e) => setUsuario({ ...usuario, contrasena: e.target.value })}
        />
      </div>
      <button onClick={manejarRegistro} className="btn btn-primary">
        Registrarse
      </button>
    </div>
  );
}

export default Registro;
