// ComentarioStats.jsx
import React from 'react';

const ComentarioStats = ({ comentarios }) => {
  let promedioCalificacion = 0;
  if (comentarios.length > 0) {
    promedioCalificacion = comentarios.reduce((total, comentario) => total + comentario.calificacion, 0) / comentarios.length;
    promedioCalificacion = promedioCalificacion.toFixed(1);
  }

  return (
    <div className='feedback-stats'>
        {/* El número de comentarios que hay en el arreglo comentario */}
        <h4>Comentarios: {comentarios.length}</h4>
        {/* El promedio de calificaciones de los comentarios en el arreglo */}
        <h4>Calificación promedio: {promedioCalificacion}</h4>
    </div>
  );
}

export default ComentarioStats;