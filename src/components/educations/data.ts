type Education = {
    title: string
    specialty?: string
    school: string
    dates: string
    location: string
    description?: string
}

export const EDUCATION: Education[] = [
    {
        title: 'Three.js Journey',
        school: 'Bruno Simon',
        dates: 'Ongoing',
        location: 'Online Course'
    },
    {
        title: 'Licence Professionnelle (Bachelor Degree)',
        specialty: 'Full-stack Development',
        school: 'Capitole University',
        dates: '2020-2021',
        location: 'Toulouse, France'
    },
    {
        title: 'Diplôme Universitaire De Technologie (DEC-T)',
        specialty: 'IT',
        school: 'Paul Sabatier University',
        dates: '2019-2020',
        location: 'Toulouse, France'
    },
    {
        title: 'Brevet de Technicien Supérieur (DEC-T)',
        specialty: 'GRAPHIC DESIGN',
        school: 'ESAAT',
        dates: '2017-2019',
        location: 'Roubaix, France'
    },
    {
        title: 'PREPARATORY COURSE',
        specialty: 'APPLIED ARTS',
        school: 'Saliège School',
        dates: '2016-2017',
        location: 'Toulouse, France'
    }
]
