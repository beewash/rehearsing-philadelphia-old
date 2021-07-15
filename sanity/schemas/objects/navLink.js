const navLink = {
    name: 'navLink',
    title: 'Navigation Link',
    type: 'object',
    fields: [
        {
            title: 'Internal Link',
            name: 'internalLink',
            description: 'Select pages for navigation',
            type: 'reference',
            to: [{ type: 'people' }, { type: 'performanceCat' }]
        },
        {
            title: 'External Link',
            name: 'externalLink',
            description: 'Use fully qualified URLs for external link',
            type: 'link'
        }
    ]
};

export default navLink;