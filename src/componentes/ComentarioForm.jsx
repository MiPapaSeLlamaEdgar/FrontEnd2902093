import {React, useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'

const ComentarioForm = () => {

    const[text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    }

  return (
    <Card reverse={false}>
    <form>
        <ComentarioCalificacion />
      <div className='input-group'>
        <input value={text} onChange={handleTextChange} type="text" placeholder="Ingrese su Comentario Aqui" />
        <button>Guardar</button>
      </div>
    </form>
    </Card>
  )
}

export default ComentarioForm
