import React from 'react'

const TarjetaProyecto = ({ imagen, nombre }) => {
    return (
        <div className='projectItem'>
            <div style={{ backgroundImage: `url(${imagen})` }} className='bgImage' />
            <h1>{nombre}</h1>
        </div>
    )
}

export default TarjetaProyecto