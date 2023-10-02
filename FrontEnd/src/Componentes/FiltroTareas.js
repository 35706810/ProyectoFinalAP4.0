import React from 'react';

function FiltroTareas({ filtro, cambiarFiltro }) {
  return (
    <div>
      <label>Buscar tareas:</label>
      <input
        type="text"
        value={filtro}
        onChange={(e) => cambiarFiltro(e.target.value)}
        placeholder="Buscar tareas..."
      />
    </div>
  );
}

export default FiltroTareas;

