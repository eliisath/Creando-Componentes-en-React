import React from "react";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const tareas = [
    { id: 1, texto: "Crear Componentes en React" },
    { id: 2, texto: "Enlazar los Componentes con la APP Principal" },
    { id: 3, texto: "Hacer que Funcione" },
  ];

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <Tarea id={tarea.id} texto={tarea.texto} />
        ))}
      </ul>
    </div>
  );
}
export default ListaDeTareas;
