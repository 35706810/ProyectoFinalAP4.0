import React, { useState, useEffect } from 'react';

function TareaFormulario({ onAgregarTarea, tareaEditando, indiceEditar }) {
  const [nuevaTarea, setNuevaTarea] = useState({
    titulo: '',
    descripcion: '',
    completada: false,
  });

  useEffect(() => {
    if (tareaEditando !== null && indiceEditar !== null) {
      setNuevaTarea(tareaEditando);
    }
  }, [tareaEditando, indiceEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (indiceEditar !== null) {
        response = await fetch(`http://localhost:8000/api/tareas/${nuevaTarea.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevaTarea),
        });
      } else {
        response = await fetch('http://localhost:8000/api/tareas/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevaTarea),
        });
      }

      if (response.ok) {
        const tarea = await response.json();
        onAgregarTarea(tarea, indiceEditar);
        setNuevaTarea({ titulo: '', descripcion: '', completada: false });
      } else {
        console.error('Error al procesar la tarea', response);
      }
    } catch (error) {
      console.error('Error al procesar la tarea', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          value={nuevaTarea.titulo}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, titulo: e.target.value })}
          placeholder="Ingrese el título de la tarea"
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          className="form-control"
          id="descripcion"
          value={nuevaTarea.descripcion}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, descripcion: e.target.value })}
          placeholder="Ingrese la descripción de la tarea"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {indiceEditar !== null ? 'Editar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  );
}

export default TareaFormulario;





