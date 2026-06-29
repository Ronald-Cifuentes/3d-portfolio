interface JobEntry {
  title: string
  company: string
  date: string
  points: readonly string[]
}

export interface TranslationKeys {
  nav: {
    work: string
    skills: string
    projects: string
    contact: string
    menuAlt: string
  }
  content: {
    greeting: string
    description: string
    descriptionLine2: string
  }
  experience: {
    title: string
    present: string
    jobs: {
      acidLabs: JobEntry
      treinta: JobEntry
      itGlobers: JobEntry
      softgic: JobEntry
      mantum: JobEntry
      freelancer: JobEntry
      sena: JobEntry
    }
  }
  skills: {
    title: string
    paragraphs: readonly string[]
  }
  languageSelector: {
    label: string
    en: string
    es: string
  }
}

export const en: TranslationKeys = {
  nav: {
    work: 'Work',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    menuAlt: 'menu',
  },
  content: {
    greeting: "Hi, I'm",
    description: 'Web Developer, Designer UX / UI',
    descriptionLine2: 'Web3, Javascript Specialist',
  },
  experience: {
    title: 'Work Experience.',
    present: 'Present',
    jobs: {
      acidLabs: {
        title: 'Sr React Developer & FullStack',
        company: 'Acid Labs',
        date: 'February 2023 - Present',
        points: [
          'Custom development, Creation, Increase and Correction of different repositories using webpack and module federation.',
          'Layout and translate designs or mockups into Typescript, MaterialUI.',
          'Testing with Jest and Cypress',
          'Suggest constant improvements in the development process and optimization of the different tasks',
        ],
      },
      treinta: {
        title: 'Sr React Developer',
        company: 'Treinta',
        date: 'June 2022 - May 2023',
        points: [
          'Developing and maintaining web applications using React.js and other related technologies.',
          'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
          'Implementing responsive design and ensuring cross-browser compatibility.',
          'Participating in code reviews and providing constructive feedback to other developers.',
        ],
      },
      itGlobers: {
        title: 'Sr React Developer',
        company: 'It Globers',
        date: 'September 2021 - May 2022',
        points: [
          'Creation of customized solutions for E-commerce',
          'Layout and translate designs or mockups into vtex and another programming languages.',
          'Suggest constant improvements in the development process and optimization of the different tasks.',
          'Participating in code reviews and providing constructive feedback to other developers.',
        ],
      },
      softgic: {
        title: 'React Frontend & Fullstack Analyst',
        company: 'Softgic',
        date: 'July 2020 - August 2021',
        points: [
          'Propose solutions in early stages to avoid collateral damage',
          'Layout and translate designs or mockups into programming languages',
          'Apply best practices in interactivity and User Experience (UX)',
          'Guarantee the correct implementation of the information architecture with security standards',
        ],
      },
      mantum: {
        title: 'Software Developer & Tester',
        company: 'Mantum',
        date: 'August 2019 - June 2020',
        points: [
          'Custom development, Increase and Correction of modules of the Mantum CMMS system',
          'QA and suggestions for constant improvement',
          'Agile methodologies (Scrum) & QA',
          'Management of DBs',
        ],
      },
      freelancer: {
        title: 'Software Developer | Technician In Systems, Electronics & Electricity',
        company: 'Freelancer',
        date: 'January 2018 - August 2019',
        points: [
          'Custom development and maintenance of LandingPages and applications with php, html, css and javascript',
          'Cell phone technician',
          'Christian Faith Community Attention to computer systems, assembly, maintenance and repair of public type led signs, repair of all types of audio and electronic systems',
        ],
      },
      sena: {
        title: 'Instructor & Researcher',
        company: 'Sena',
        date: 'March 2016 - December 2017',
        points: [
          'Software development for general control of National Instruments embedded systems in c and c ++',
          'Development of software, firmware and hardware for public led boards with PicC and VB.Net, python',
          'Management, prototype and construction of an induction hardening machine for Industry',
        ],
      },
    },
  },
  skills: {
    title: 'Skills and Technologies.',
    paragraphs: [
      'I am an experienced software developer with knowledge in different Backend and Frontend technologies, such as Angular, Vue and Svelte. I have skills for UX/UI design, using version control, creating responsive designs and working with different editors and shortcuts. I also have knowledge of Prompt Engineering which is the process of creating effective Prompts for artificial intelligence models.',
      'On the backend side, I can develop applications using JavaScript, C, C++, C#, Java, Python and PHP. I am familiar with different frameworks, libraries and tools for each language. I can also work with various databases, such as SQLServer, MongoDB, Firebase and others. I know how to implement and manage applications on cloud platforms, such as Azure, AWS and Google Cloud. I also follow best practices for testing and security, such as unit testing, integration testing, code analysis, encryption, authentication and authorization.',
      "I am passionate about learning new technologies and solving challenging problems. I have a strong work ethic and a collaborative attitude. I am always looking for opportunities to improve my skills and contribute to the success of the projects I work on. Let's work together to bring your ideas to life!",
    ],
  },
  languageSelector: {
    label: 'Select language',
    en: 'English',
    es: 'Spanish',
  },
}
