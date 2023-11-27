import React from 'react';

const img = () => {
    return (
        <div style={{
            backgroundImage: `url('../Dashboard/logo(2).png')`,
            backgroundRepeat: 'no-repeat',
            width: '200px',  // Ajusta el ancho según tus necesidades
            height: '200px',  // Ajusta la altura según tus necesidades
        }} />
    );
};

export default (img);