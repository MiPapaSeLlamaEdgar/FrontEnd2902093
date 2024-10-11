// Comentarioitem.jsx
import React from 'react';
import Card from './Card';
import { FaTimes } from 'react-icons/fa';

const ComentarioItem = ({ comentario, calificacion, id, handelDelete }) => {
    const borrarItem = () => {
        handelDelete(id);
    };

    return (
        <Card reverse={false}>
            <div className='num-display'>{calificacion}</div>
            <button onClick={borrarItem} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{comentario}</div>
        </Card>
    );
};

export default ComentarioItem;