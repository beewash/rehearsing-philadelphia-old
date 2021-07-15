import { GiMusicalScore } from 'react-icons/gi';

const performances = {
    name: 'performances',
    title: 'Performances',
    type: 'document',
    icon: GiMusicalScore,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Date',
            name: 'performnaceDate',
            type: 'date',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Location',
            name: 'performanceLocation',
            type: 'reference',
            to: [{ type: 'venues' }],
            validation: (Rule) => Rule.required()
        },
        {
            title: 'Performance Type',
            name: 'performanceType',
            description: 'Pick one performance type associated with this performance',
            type: 'reference',
            to: [{ type: 'performanceCat' }]
        },
        {
            title: 'Credits',
            name: 'credits',
            type: 'array',
            of: [{ type: 'peopleObject' }]
        },
    ]
};

export default performances;