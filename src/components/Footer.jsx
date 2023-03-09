//dependencias
import React from 'react'

//estilos
import '../styled-component/footerStyled.css'
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandTwitter } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href="https://github.com/amarmor878" target={'_blank'} rel={'noreferrer'}><IconBrandGithub size={36} /></a>
                <a href="https://www.instagram.com/bertmarti6/" target={'_blank'} rel={'noreferrer'}><IconBrandInstagram size={36} /></a>
                <a href="https://twitter.com/bertmarti6" target={'_blank'} rel={'noreferrer'}><IconBrandTwitter size={36} /></a>
                <a href="https://www.linkedin.com/in/alberto-mart%C3%ADnez-moreno-9a7389264/" target={'_blank'} rel={'noreferrer'}><IconBrandLinkedin size={36} /></a>
            </div>
            <p>&copy; 2023 bertmarti</p>
        </div>
    )
}

export default Footer