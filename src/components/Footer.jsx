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
                <IconBrandGithub size={36} />
                <IconBrandInstagram size={36} />
                <IconBrandTwitter size={36} />
                <IconBrandLinkedin size={36} />
            </div>
            <p>&copy; 2023 bertmarti</p>
        </div>
    )
}

export default Footer