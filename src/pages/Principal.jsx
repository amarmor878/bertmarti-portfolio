//dependencias
import React from 'react'

//Estilos
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
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
                    <a href="https://www.linkedin.com/in/alberto-mart%C3%ADnez-moreno-9a7389264/" target={'_blank'} rel={'noreferrer'}><IconBrandLinkedin color='whitesmoke' size={36} /></a>
                    <a href="https://github.com/amarmor878"><IconBrandGithub color='whitesmoke' size={36} target={'_blank'} rel={'noreferrer'} /></a>
                </div>
            </div>
            <div className='skills'>
                <h3>About Me</h3>
                <div className='list'>
                    <div className='item-p'>
                        Hi, my name is Alberto Martínez Moreno. I'm a 🎨 graphic designer currently studying 💻 Web Development. I love learning about new 🖥️ technologies, 📚 reading and 🎧 listening to podcasts, as well as ✈️ traveling and exploring new places. I currently live in Arjonilla (Jaén), although I was born in Barcelona and have a great passion for experiencing new 🌍 cultures.
                        My long-term goal is to become a 💻 web developer and not only that, but also to share my knowledge with others. I would love to 👨‍🏫 teach and train new people in the world of programming and help them grow. I've always had a friendly and helpful personality, and I like to help others in any way I can. I'm excited about what the future holds for me in the field of web development and I hope to make a difference in the lives of others. 😄
                    </div>
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