import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProyectos } from '../helpers/ListaProyectos';

//estilos
import { IconBrandGithub } from '@tabler/icons-react';
import '../styled-component/listaProyectStyled.css'


export const Proyecto = () => {
    const { id } = useParams();
    const proyecto = ListaProyectos[id]
    
    return (
        <div className='project'>
            <h1>{proyecto.name}</h1>
            <img src={proyecto.image} alt={proyecto.name} />
            <p>
                Skills: {proyecto.skills}
            </p>
            <IconBrandGithub color='whitesmoke' size={36} />
        </div>
    )
}

export default Proyecto