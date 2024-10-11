// ComentarioLista.jsx
import React from 'react';
import Comentarioitem from "./Comentarioitem";

function ComentarioLista({ comentarios, handelDelete }) {
  if (!comentarios || comentarios.length === 0|| comentarios.length === 0) {
    return <h3>No hay comentarios disponibles.</h3>;
  }

  return (
    <div className='comments'>
      <ul>
        {comentarios.map((comentario) => (
          <Comentarioitem
            key={comentario.id}
            comentario={comentario.comentario}
            calificacion={comentario.calificacion}
            id={comentario.id}
            handelDelete={handelDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ComentarioLista;

