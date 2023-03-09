//Dependencias
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

//Estilos
import { IconMenu2 } from '@tabler/icons-react';
import '../styled-component/barraNavegacionStyled.css'

export const BarraNavegacion = () => {
    //state para setear y comprobar si la barra está extendida o no.
    const [expandirBarraNav, setExpandirBarraNav] = useState(false)

    const localizacion = useLocation();

    useEffect(() => {
        setExpandirBarraNav(false)
    }, [localizacion])

    return (
        <div className='navbar' id={expandirBarraNav ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => {
                    setExpandirBarraNav((vista) => !vista)
                }}>
                    <IconMenu2 size={30} stroke={1.5} />
                </button>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default BarraNavegacion