type Experience = {
    position: string
    type?: string
    company: string
    dates: string
    location: string
    description: string[]
}
export const EXPERIENCES: Experience[] = [
    {
        position: 'Front-end Developer',
        company: 'SOGETI',
        dates: 'March 2022 - February 2023',
        location: 'Toulouse, France',
        description: [
            'Contributed to a cross-entity team from Capgemini, working for SANOFI on a crucial data management tool for pre-clinical studies.',
            'Led front-end development (JHipster, Angular), ensuring functionality and seamless visual integration.',
            'Collaborated with back-end developers and designers to ensure the tool meet the client’s and users’ expectations.',
            'Actively participated in SCRUM events, and occasionally stepped in as a replacement for the scrum master, effectively leading meetings to ensure project progress and team coordination.'
        ]
    },
    {
        position: 'Web Integrator',
        type: 'Freelance subcontractor',
        company: 'HAMAC',
        dates: 'February 2023',
        location: 'Toulouse, France',
        description: [
            "Worked with WP Bakery to integrate two pages of a WordPress website, domaine-dampierre.com, and domainedampierre.com/seminaire-yvelines, following a redesign. The objective was to enhance the website's aesthetics and create a more user-friendly experience.",
            "Collaborated closely with the designer and SEO Manager to optimize the website's functionality and improve search engine rankings, enhancing its online visibility and driving organic traffic."
        ]
    },
    {
        position: 'Full-stack Developer',
        type: 'Intern',
        company: 'Inconito Agency',
        dates: 'April - September 2021',
        location: 'Toulouse, France',
        description: [
            'Leveraged Drupal and WordPress to develop customized themes and maintain websites for esteemed clients like canal-du-midi.com, xvparlementaire.fr, and groupeorion-oncologie-radiotherapie.fr.',
            'Contributed to functional specifications, assessed project timelines, and played an integral role in project planning, enabling the team to set achievable goals and effectively manage project milestones.',
            'Thrived in a fast-paced, deadline-driven environment.'
        ]
    },
    {
        position: 'Web designer & Front-end Developer',
        company: 'Toxiplan',
        dates: 'November 2020 - June 2021',
        location: 'Toulouse, France',
        description: [
            'Spearheaded the UX/UI design and front-end development of a web application for data and documentation management to optimize the startup work processes, resulting in substantial time and cost savings.',
            'Used React and Material UI, combining aesthetics and usability to create an intuitive and visually pleasing user interface.',
            "Collaborated closely with legal advisors and sociologists within an agile environment, ensuring the application's design and functionality effectively addressed user needs."
        ]
    },
    {
        position: 'Full-stack Developer',
        type: 'Intern',
        company: 'BlueHelper.fr',
        dates: 'June - August 2020',
        location: 'Toulouse, France',
        description: [
            'Developed and debugged functionalities for bluehelper.fr, a platform connecting medical and charity professionals to volunteers, using SMARTY (PHP, HTML, CSS).',
            'Assumed a leadership role within the intern technical team, effectively organizing and distributing tasks based on individual skills, optimizing efficiency and productivity.'
        ]
    },
    {
        position: 'Graphic Designer',
        type: 'Intern',
        company: 'PGO Agency',
        dates: 'April - June 2018',
        location: 'Toulouse, France',
        description: [
            "Designed Instagram visuals for Pitta Rosso and the agency's press releases.",
            'Developed design proposals for logos and promotional items, aligning with client requirements and brand identity.',
            "Provided valuable assistance for the agency's flagship event, the MAP festival, contributing to its overall success."
        ]
    }
]
