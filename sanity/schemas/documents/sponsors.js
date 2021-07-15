import { FaHandshake } from 'react-icons/fa';

const sponsors = {
    name: 'sponsors',
    title: 'Sponsors',
    type: 'document',
    icon: FaHandshake,
    fields: [
        {
            name: 'sponsorName',
            title: 'Name of Sponsor',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'sponsorLogo',
            title: 'Logo',
            type: 'imageFigure',
            validation: (Rule) => Rule.required()
        }
    ]
};

export default sponsors;