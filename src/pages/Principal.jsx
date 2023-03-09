//dependencias
import React from 'react'

//Estilos
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import '../styled-component/principalStyled.css'

//front
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandHtml5 } from '@tabler/icons-react';
import { IconBrandCss3 } from '@tabler/icons-react';
import { IconBrandSass } from '@tabler/icons-react';
import { IconBrandBootstrap } from '@tabler/icons-react';
import { IconBrandTailwind } from '@tabler/icons-react';

//back
import { IconBrandNpm } from '@tabler/icons-react';
import { IconBrandPhp } from '@tabler/icons-react';
import { IconBrandLaravel } from '@tabler/icons-react';
import { IconBrandSymfony } from '@tabler/icons-react';
import { IconBrandMysql } from '@tabler/icons-react';

//lenguajes
import { IconBrandJavascript } from '@tabler/icons-react';
import { IconCircleLetterJ } from '@tabler/icons-react';

//graficos
import { IconBrandAdobe } from '@tabler/icons-react';
import { IconBrandFigma } from '@tabler/icons-react';

export const Principal = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2><code>Hi, I'm Alberto</code></h2>
                <div className='prompt'>
                    <p><code>console.<span className='yellowColor'>log</span>(<span className='orangeColor'>'I'm a Frontend Developer and Graphic Designer'</span>);</code></p>
                    <IconBrandLinkedin color='whitesmoke' size={36} />
                    <IconMail color='whitesmoke' size={36} />
                    <IconBrandGithub color='whitesmoke' size={36} />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-end</h2>
                        <span>
                            <IconBrandReact color='#09a9c5' size={48} />{" "}
                            <IconBrandHtml5 color='#09a9c5' size={48} />{" "}
                            <IconBrandCss3 color='#09a9c5' size={48} />{" "}
                            <IconBrandSass color='#09a9c5' size={48} />{" "}
                            <IconBrandBootstrap color='#09a9c5' size={48} />{" "}
                            <IconBrandTailwind color='#09a9c5' size={48} />
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-end</h2>
                        <span>
                            <IconBrandNpm color='#09a9c5' size={48} />{" "}
                            <IconBrandPhp color='#09a9c5' size={48} />{" "}
                            <IconBrandLaravel color='#09a9c5' size={48} />{" "}
                            <IconBrandSymfony color='#09a9c5' size={48} />{" "}
                            <IconBrandMysql color='#09a9c5' size={48} />
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Lenguagues</h2>
                        <span>
                            <IconBrandJavascript color='#09a9c5' size={48} />{" "}
                            <IconCircleLetterJ color='#09a9c5' size={48} />
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Graphic Design</h2>
                        <span>
                            <IconBrandAdobe color='#09a9c5' size={48} />{" "}
                            <IconBrandFigma color='#09a9c5' size={48} />
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Principal