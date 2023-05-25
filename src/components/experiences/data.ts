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
            'Employed by SOGETI to work on behalf of SANOFI as part of a Capgemini cross-entity team.',
            'Responsible for the front-end development of a data management tool used for pre-clinical studies.',
            'Collaborated with back-end developers and designers to ensure the tool meet the client’s and users’ expectations.',
            'Used SCRUM methodology as part of the development process, participating in SCRUM events as a developer and leading meetings as a replacement for the scrum master when needed.'
        ]
    },
    {
        position: 'Web Integrator',
        type: 'Freelance subcontractor',
        company: 'HAMAC',
        dates: 'February 2023',
        location: 'Toulouse, France',
        description: [
            "Integrated 2 pages of a WordPress website using WP Bakery for Hamac's client : domaine-dampierre.com and domaine-dampierre.com/seminaire-yvelines",
            "Collaborated with the designer and SEO Manager to ensure the website's functionality and search engine optimization were up to standard."
        ]
    },
    {
        position: 'Full-stack Developer',
        type: 'Intern',
        company: 'Inconito Agency',
        dates: 'April - September 2021',
        location: 'Toulouse, France',
        description: [
            'Custom theme development and maintenance using Drupal and WordPress for clients such as canal-du-midi.com, xvparlementaire.fr, and groupeorion-oncologie-radiotherapie.fr.',
            'Participated in the creation of functional specifications and provided time estimates and planning.',
            'Demonstrated the ability to work in a fast-paced, deadline-driven environment.'
        ]
    },
    {
        position: 'Web designer & Front-end Developer',
        company: 'Toxiplan',
        dates: 'November 2020 - June 2021',
        location: 'Toulouse, France',
        description: [
            'Took charge of the UX/UI design and front-end development of a web-application for data and documentation management using React and Material UI.',
            'Collaborated with diverse disciplines, including legal advisors and sociologists, within an agile environment.'
        ]
    },
    {
        position: 'Full-stack Developer',
        type: 'Intern',
        company: 'BlueHelper.fr',
        dates: 'June - August 2020',
        location: 'Toulouse, France',
        description: [
            'Developed and debugged functionalities for bluehelper.fr, a website to post and find missions in the medical and charity field, using SMARTY (PHP, HTML, CSS).',
            'Took charge of the technical team of interns, helping to organize and distribute tasks according to their skills.'
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
            'Developed design proposals for logos and promotional items.',
            "Assisted the team in organizing and executing the agency's main event, the MAP festival."
        ]
    }
]
