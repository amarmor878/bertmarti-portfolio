import Proyecto1 from '../assets/proj1.png'
import Proyecto2 from '../assets/proj2.png'

//iconos
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandHtml5 } from '@tabler/icons-react';
import { IconBrandCss3 } from '@tabler/icons-react';

export const ListaProyectos = [
    {
        name: 'Filmionary',
        image: Proyecto2,
        skills: <><IconBrandReact size={30} /> <IconBrandHtml5 size={30} /> <IconBrandCss3 size={30} /></>,
        description: "Filmionary es una aplicación web que permite a los usuarios buscar información sobre películas y series de televisión. La aplicación utiliza la API de The Movie DB para obtener información actualizada sobre las películas y series de televisión. Filmionary también permite a los usuarios crear una lista de favoritos y ver los detalles de las películas y series de televisión, como el reparto, la trama, las críticas, el año de lanzamiento, etc. La aplicación utiliza tecnologías como React, Styled Components y React Responsive Carousel para crear una interfaz de usuario atractiva y fácil de usar."
    },
    {
        name: 'Purrfect Planner',
        image: Proyecto1,
        skills: <><IconBrandReact size={30} /> <IconBrandHtml5 size={30} /> <IconBrandCss3 size={30} /></>,
        description: "Purrfect Planner es una aplicación web para gestionar citas, diseñada específicamente para veterinarias que necesitan llevar un registro de las citas de sus pacientes y sus dueños."
    }
]