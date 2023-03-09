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
        skills: <IconBrandReact /> + " " + <IconBrandHtml5 /> + " " + <IconBrandCss3 />
    },
    {
        name: 'Purrfect Planner',
        image: Proyecto1
    }
]