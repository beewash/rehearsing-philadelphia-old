import { GrServices } from "react-icons/gr";

const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    icon: GrServices,
    fields: [
        {
            name: 'title',
            title: 'title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Meta Data',
            type: 'text'
        },
        {
            title: 'URL',
            name: 'url',
            type: 'url',
            description: 'The main site url. Used to create canonical url',
        },
        {
            name: 'logoColor',
            title: 'Logo (color)',
            type: 'imageFigure',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'logoBw',
            title: 'Logo (black & White)',
            type: 'imageFigure',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'frontpage',
            type: 'reference',
            description: 'Choose page to be the frontpage',
            to: { type: 'page' },
        },
        {
            title: 'Main navigation',
            name: 'mainNav',
            description: 'Select menu for main navigation',
            type: 'reference',
            to: {type: 'navigation'}, 
        },
        {
            title: 'Footer navigation',
            name: 'socialNav',
            description: 'Select menu for social navigation',
            type: 'reference',
            to: {type: 'navigation'},
        },
    ]
};

export default siteSettings;