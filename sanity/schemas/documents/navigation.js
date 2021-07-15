import { GrNavigate } from 'react-icons/gr';

const navigation = {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: GrNavigate,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'navId',
            type: 'slug',
            title: 'Navigation Id'
        },
        {
            name: 'items',
            type: 'array',
            title: 'Navigation Items',
            of: [{ type: 'navigationItem' }]
        }
    ]
};

export default navigation;

