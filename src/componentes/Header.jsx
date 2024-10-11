import React from 'react';

const Header = (props) => {
    const headerStyles = {
        backgroundColor: 'black',
        color: 'red',
        padding: '10px', // Añadido padding para mejor presentación
    };
    const autorStyles = {
        color: 'white',
        backgroundColor: 'green',
        margin: '5px 0', // Margen para separar elementos
    };
    const fichaStyles = {
        color: 'white',
        backgroundColor: 'blue',
        margin: '5px 0',
    };
    const centroStyles = {
        color: 'white',
        backgroundColor: 'purple',
        margin: '5px 0',
    };

    return (
        <header style={headerStyles}>
                <h1>{props.titulo}</h1> 
                <p style={autorStyles}>{props.autor}</p> 
                <p style={centroStyles}>{props.centro}</p>
                <p style={fichaStyles}>{props.ficha}</p>
        </header>
    );
};

export default Header;
