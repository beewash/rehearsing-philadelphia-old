import { GrCircleInformation } from 'react-icons/gr';

const eventInformation = {
    name: 'eventInformation',
    title: 'Event Information',
    type: 'document',
    icon: GrCircleInformation,
    fields: [
        {
            name: 'eventTitle',
            title: 'Event Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'eventSubTitle',
            title: 'Event Subtitle',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'eventDate',
            title: 'Event Date',
            description: 'Example: September 19th - September 30th, 2021',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'eventDescription',
            title: 'Event Description',
            type: 'richText',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'eventSponsorDes',
            title: 'A word about/from our Sponsors',
            description: 'A word about the Sponsors that help put on the event',
            type: 'richText',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'eventLocation',
            title: 'Location',
            description: 'List the city where the event will be held.  Example: New York, NY',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'socialLinks',
            type: 'socialLinks',
        },
    ]
};

export default eventInformation;