import React, { useState } from 'react';
import TareaFormulario from './Componentes/TareaFormulario';
import ListaTareas from './Componentes/ListaTareas';
import InicioSesion from './Componentes/InicioSesion';
import Registro from './Componentes/Registro';
import FiltroTareas from './Componentes/FiltroTareas';

function App() {
  const [usuario, setUsuario] = useState(null); // Para almacenar la información del usuario
  const [tareas, setTareas] = useState([]);
  const [tareaEditando, setTareaEditando] = useState(null);
  const [indiceEditar, setIndiceEditar] = useState(null);
  const [filtro, setFiltro] = useState('');

  const manejarInicioSesion = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const manejarRegistro = (datosUsuario) => {
    setUsuario(datosUsuario);
  };

  const agregarTarea = (nuevaTarea, indice) => {
    if (indice === null) {
      setTareas([...tareas, nuevaTarea]);
    } else {
      const nuevasTareas = [...tareas];
      nuevasTareas[indice] = nuevaTarea;
      setTareas(nuevasTareas);
      setTareaEditando(null);
      setIndiceEditar(null);
    }
  };

  const editarTarea = (indice) => {
    setTareaEditando(tareas[indice]);
    setIndiceEditar(indice);
  };

  const marcarCompletada = (indice) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[indice].completada = !nuevasTareas[indice].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(indice, 1);
    setTareas(nuevasTareas);
  };

  const tareasFiltradas = tareas.filter((tarea) =>
    tarea.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="my-4">Gestor de Tareas</h1>
      </div>

      {usuario ? (
        <div className="row">
          <div className="col-md-6">
            <div className="formulario-container">
              <TareaFormulario
                onAgregarTarea={agregarTarea}
                tareaEditando={tareaEditando}
                indiceEditar={indiceEditar}
              />
            </div>
            <div className="filtro-container">
              <FiltroTareas filtro={filtro} cambiarFiltro={setFiltro} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="lista-tareas">
              <ListaTareas
                tareas={tareasFiltradas}
                editarTarea={editarTarea}
                marcarCompletada={marcarCompletada}
                eliminarTarea={eliminarTarea}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <InicioSesion onInicioSesion={manejarInicioSesion} />
            <Registro onRegistro={manejarRegistro} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;



