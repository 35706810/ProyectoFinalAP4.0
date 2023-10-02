import React from 'react';

function ListaTareas({ tareas, editarTarea, marcarCompletada, eliminarTarea }) {
  const handleEliminarTarea = async (indice) => {
    const tareaAEliminar = tareas[indice];

    try {
      const response = await fetch(`http://localhost:8000/api/tareas/${tareaAEliminar.id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const nuevasTareas = tareas.filter((t, index) => index !== indice);
        eliminarTarea(indice);  // Actualizamos el estado local antes de la respuesta del servidor
      } else {
        console.error('Error al eliminar la tarea');
      }
    } catch (error) {
      console.error('Error al eliminar la tarea', error);
    }
  };

  return (
    <ul className="list-group">
      {tareas.map((tarea, index) => (
        <li key={index} className={`list-group-item ${tarea.completada ? 'list-group-item-success' : ''}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3 className={tarea.completada ? 'text-success' : ''}>{tarea.titulo}</h3>
              <p className={`mb-0 ${tarea.completada ? 'text-success' : ''}`}>{tarea.descripcion}</p>
            </div>
            <div className="btn-group" role="group" aria-label="Acciones">
              {!tarea.completada && (
                <button className="btn btn-outline-primary" onClick={() => editarTarea(index)}>
                  Editar
                </button>
              )}
              <button
                className={`btn ${tarea.completada ? 'btn-outline-success' : 'btn-success'}`}
                onClick={() => marcarCompletada(index)}
              >
                {tarea.completada ? '✔' : 'Completar'}
              </button>
              <button className="btn btn-outline-danger" onClick={() => handleEliminarTarea(index)}>
                Eliminar
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;




