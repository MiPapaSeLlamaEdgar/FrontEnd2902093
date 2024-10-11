// App.jsx
import React, { useState } from 'react'; // Asegúrate de que la importación sea correcta
import Header from './componentes/Header.jsx';
import Comentarioitem from './componentes/Comentarioitem.jsx';
import ComentarioLista from './componentes/ComentarioLista.jsx';
import Card from './componentes/Card.jsx';
import { FaTimes } from 'react-icons/fa';
import comentariosData from './data/Comentarios.js';
import ComentarioStats from './componentes/ComentarioStats.jsx';
import ComentarioForm from './componentes/ComentarioForm.jsx';

function App() {
    const [comentarios, setComentarios] = useState(comentariosData);

    const titulo = "App de Comentarios";
    const autor = "Eric Gonzalez";
    const ficha = "2902093";
    const centro = "CGMLTI";
    
    const loading = false;

    const borrarItem = (id) => {
        if (window.confirm("¿Quieres borrar este comentario?")) {
            //Asignar nuevo estado a comentarios
            //filter: para quitar los comentarios cuyo id es el parametro
            setComentarios(comentarios.filter(c => c.id !== id));
        }
    };

    if (loading) return <h1>Cargando comentarios</h1>;

    return (
        <div className='container'>
            <Header titulo={titulo} autor={autor} ficha={ficha} centro={centro} />
            <ComentarioForm />
            <ComentarioStats comentarios={comentarios} />
            <ComentarioLista 
                comentarios={comentarios} 
                handelDelete={borrarItem}
            />
        </div>
    );
}

export default App;

