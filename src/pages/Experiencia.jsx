import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

//Estilos
import '../styled-component/experienciaStyled.css'
import 'react-vertical-timeline-component/style.min.css'
import { IconSchool } from '@tabler/icons-react';
import { IconBriefcase } from '@tabler/icons-react';

const Experiencia = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#09a9c5'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2023'
          iconStyle={{ background: '#09a9c5', color: '#fff' }}
          icon={<IconSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Higher Education - Web Application Development
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Education center - IES Jándula (Andujar)
          </h4>
          <p>
            The Web Application Development course teaches skills in programming, design, and database management to create quality web applications. Programming languages learned include Java, HTML, CSS, JavaScript, PHP, and SQL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2020 - 2021'
          iconStyle={{ background: '#ebd768', color: '#fff' }}
          icon={<IconBriefcase />}
        >
          <h3 className='vertical-timeline-element-title'>
            Graphic Designer - "Goldfit"
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Job position - Freelance
          </h4>
          <p>
            Rebranding of brand, design of merchandising, video editing for social media and promotions and layout of documents.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2020 - 2021'
          iconStyle={{ background: '#ebd768', color: '#fff' }}
          icon={<IconBriefcase />}
        >
          <h3 className='vertical-timeline-element-title'>
            Graphic Designer - "Evolution Fit"
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Job position - Freelance
          </h4>
          <p>
            Creation of brand and branding, Instagram social media management, video editing and promotions for social media.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2020 - 2021'
          iconStyle={{ background: '#ebd768', color: '#fff' }}
          icon={<IconBriefcase />}
        >
          <h3 className='vertical-timeline-element-title'>
            Graphic Designer - "Fusión Latina"
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Job position - Freelance
          </h4>
          <p>
            Video editing for social media and promotions.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2019'
          iconStyle={{ background: '#09a9c5', color: '#fff' }}
          icon={<IconSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Higher Education - Graphic Design
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Education center - Escuela Arte Granada (Granada)
          </h4>
          <p>
            The Graphic Design course teaches skills in graphic design, typography, and image editing to create quality graphic designs. Programs learned include Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Premiere, and Adobe After Effects.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2014 - 2016'
          iconStyle={{ background: '#09a9c5', color: '#fff' }}
          icon={<IconSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Middle Grade - Printing Prepress in Graphic Arts.
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Education center - IES Santo Reino (Torredonjimeno)
          </h4>
          <p>
            The fundamentals of design are learned, from understanding text and print files to designing images, layout, and image manipulation with Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Prepr, etc. in the Middle Grade Printing Prepress in Graphic Arts.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className='experience'>
        <h1>Courses of interest</h1>
        <VerticalTimeline lineColor='#09a9c5'>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2023 - 56 hours'
            iconStyle={{ background: '#09a9c5', color: '#fff' }}
            icon={<IconSchool />}
          >
            <h3 className='vertical-timeline-element-title'>
              Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress +
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Udemy - En desarrollo
            </h4>
            <p>
              Courses cover programming from scratch, mastering PHP and object-oriented programming, developing full-stack web applications, and creating modern web apps with PHP frameworks. Also, gain advanced knowledge in databases for better job opportunities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2022 - 9 hours'
            iconStyle={{ background: '#09a9c5', color: '#fff' }}
            icon={<IconSchool />}
          >
            <h3 className='vertical-timeline-element-title'>
              Curso de PHP para principiantes
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              OpenWebinars Community
            </h4>
            <p>
              The course teaches the basics of PHP programming, from the installation of the environment to the creation of a web application.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2022 - 8 hours'
            iconStyle={{ background: '#09a9c5', color: '#fff' }}
            icon={<IconSchool />}
          >
            <h3 className='vertical-timeline-element-title'>
              Curso de PHP Ampliando Conceptos
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              OpenWebinars Community
            </h4>
            <p>
              The course teaches the advanced concepts of PHP programming, from the creation of a web application to the creation of a REST API.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2021 - 83 hours'
            iconStyle={{ background: '#09a9c5', color: '#fff' }}
            icon={<IconSchool />}
          >
            <h3 className='vertical-timeline-element-title'>
              Universidad de Programación
              Python, Java, JavaScript, HTML, CSS
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Udemy
            </h4>
            <p>
              The course teaches the basics of programming in Python, Java, JavaScript, HTML, and CSS. It also teaches the basics of web development, web design, and database management.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experiencia