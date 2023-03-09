import React from 'react'
import { useNavigate } from 'react-router-dom'

const TarjetaProyecto = ({ imagen, nombre, id }) => {
    const navegate = useNavigate();
    
    return (
        <div 
        className='projectItem'
        onClick={() =>{
            navegate(`/project/${id}`)
        }}>
            <div style={{ backgroundImage: `url(${imagen})` }} className='bgImage' />
            <h1>{nombre}</h1>
        </div>
    )
}

export default TarjetaProyecto