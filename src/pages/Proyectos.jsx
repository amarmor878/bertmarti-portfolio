import React from 'react'
import TarjetaProyecto from '../components/TarjetaProyecto'
import { ListaProyectos } from '../helpers/ListaProyectos'

//estilos
import '../styled-component/proyectoTarjStyled.css'

const Proyectos = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ListaProyectos.map((proyecto, idx) => {
          return <TarjetaProyecto id={idx} nombre={proyecto.name} imagen={proyecto.image} />
        })}
      </div>
    </div>
  )
}

export default Proyectos