import type { TranslationKeys } from './en'

export const es: TranslationKeys = {
  nav: {
    work: 'Trabajo',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    menuAlt: 'menu',
  },
  content: {
    greeting: 'Hola, soy',
    description: 'Desarrollador Web, Disenador UX / UI',
    descriptionLine2: 'Web3, Especialista en Javascript',
  },
  experience: {
    title: 'Experiencia Laboral.',
    present: 'Presente',
    jobs: {
      acidLabs: {
        title: 'Sr React Developer & FullStack',
        company: 'Acid Labs',
        date: 'Febrero 2023 - Presente',
        points: [
          'Desarrollo personalizado, Creacion, Incremento y Correccion de diferentes repositorios usando webpack y module federation.',
          'Maquetacion y traduccion de disenos o mockups a Typescript, MaterialUI.',
          'Testing con Jest y Cypress',
          'Sugerir mejoras constantes en el proceso de desarrollo y optimizacion de las diferentes tareas',
        ],
      },
      treinta: {
        title: 'Sr React Developer',
        company: 'Treinta',
        date: 'Junio 2022 - Mayo 2023',
        points: [
          'Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologias relacionadas.',
          'Colaboracion con equipos multifuncionales incluyendo disenadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.',
          'Implementacion de diseno responsive y asegurando compatibilidad entre navegadores.',
          'Participacion en revisiones de codigo y proporcionando retroalimentacion constructiva a otros desarrolladores.',
        ],
      },
      itGlobers: {
        title: 'Sr React Developer',
        company: 'It Globers',
        date: 'Septiembre 2021 - Mayo 2022',
        points: [
          'Creacion de soluciones personalizadas para E-commerce',
          'Maquetacion y traduccion de disenos o mockups a vtex y otros lenguajes de programacion.',
          'Sugerir mejoras constantes en el proceso de desarrollo y optimizacion de las diferentes tareas.',
          'Participacion en revisiones de codigo y proporcionando retroalimentacion constructiva a otros desarrolladores.',
        ],
      },
      softgic: {
        title: 'React Frontend & Fullstack Analyst',
        company: 'Softgic',
        date: 'Julio 2020 - Agosto 2021',
        points: [
          'Proponer soluciones en etapas tempranas para evitar danos colaterales',
          'Maquetacion y traduccion de disenos o mockups a lenguajes de programacion',
          'Aplicar mejores practicas en interactividad y Experiencia de Usuario (UX)',
          'Garantizar la correcta implementacion de la arquitectura de informacion con estandares de seguridad',
        ],
      },
      mantum: {
        title: 'Desarrollador de Software & Tester',
        company: 'Mantum',
        date: 'Agosto 2019 - Junio 2020',
        points: [
          'Desarrollo personalizado, Incremento y Correccion de modulos del sistema CMMS Mantum',
          'QA y sugerencias para mejora constante',
          'Metodologias agiles (Scrum) & QA',
          'Gestion de bases de datos',
        ],
      },
      freelancer: {
        title: 'Desarrollador de Software | Tecnico en Sistemas, Electronica y Electricidad',
        company: 'Freelancer',
        date: 'Enero 2018 - Agosto 2019',
        points: [
          'Desarrollo personalizado y mantenimiento de LandingPages y aplicaciones con php, html, css y javascript',
          'Tecnico de celulares',
          'Comunidad de Fe Cristiana Atencion a sistemas informaticos, ensamble, mantenimiento y reparacion de letreros led de tipo publico, reparacion de todo tipo de sistemas de audio y electronicos',
        ],
      },
      sena: {
        title: 'Instructor & Investigador',
        company: 'Sena',
        date: 'Marzo 2016 - Diciembre 2017',
        points: [
          'Desarrollo de software para control general de sistemas embebidos National Instruments en c y c++',
          'Desarrollo de software, firmware y hardware para tableros led publicos con PicC y VB.Net, python',
          'Gestion, prototipo y construccion de una maquina de endurecimiento por induccion para la Industria',
        ],
      },
    },
  },
  skills: {
    title: 'Habilidades y Tecnologias.',
    paragraphs: [
      'Soy un desarrollador de software experimentado con conocimiento en diferentes tecnologias Backend y Frontend, como Angular, Vue y Svelte. Tengo habilidades para diseno UX/UI, uso de control de versiones, creacion de disenos responsive y trabajo con diferentes editores y atajos. Tambien tengo conocimiento de Prompt Engineering que es el proceso de crear Prompts efectivos para modelos de inteligencia artificial.',
      'En el lado backend, puedo desarrollar aplicaciones usando JavaScript, C, C++, C#, Java, Python y PHP. Estoy familiarizado con diferentes frameworks, librerias y herramientas para cada lenguaje. Tambien puedo trabajar con varias bases de datos, como SQLServer, MongoDB, Firebase y otras. Se como implementar y gestionar aplicaciones en plataformas cloud, como Azure, AWS y Google Cloud. Tambien sigo las mejores practicas para testing y seguridad, como pruebas unitarias, pruebas de integracion, analisis de codigo, encriptacion, autenticacion y autorizacion.',
      'Me apasiona aprender nuevas tecnologias y resolver problemas desafiantes. Tengo una fuerte etica de trabajo y una actitud colaborativa. Siempre estoy buscando oportunidades para mejorar mis habilidades y contribuir al exito de los proyectos en los que trabajo. Trabajemos juntos para dar vida a tus ideas!',
    ],
  },
  languageSelector: {
    label: 'Seleccionar idioma',
    en: 'Ingles',
    es: 'Espanol',
  },
} as const
