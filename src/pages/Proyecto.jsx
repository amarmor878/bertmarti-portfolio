import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProyectos } from '../helpers/ListaProyectos';

//estilos
import '../styled-component/listaProyectStyled.css'
import { IconBrandGithub } from '@tabler/icons-react';

export const Proyecto = () => {
    const { id } = useParams();
    const proyecto = ListaProyectos[id]

    return (
        <div>
            <div className='project'>
                <h1>{proyecto.name}</h1>
                <img src={proyecto.image} alt={proyecto.name} />
                <div className="skills-container">
                    <p>
                        Skills: {proyecto.skills}
                    </p>
                </div>
                <div className="description-container">
                    <a href={proyecto.link} target={'_blank'} rel={'noreferrer'}><IconBrandGithub size={40} /></a>
                </div>
            </div>
        </div>
    )
}

export default Proyecto
