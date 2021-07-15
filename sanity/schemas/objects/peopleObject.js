const peopleObject = {
    name: 'peopleObject',
    title: 'List of people',
    type: 'object',
    fields: [
        {
            title: 'Name of person',
            name: 'personName',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'peopleList',
            title: 'List of People',
            type: 'reference',
            to: [{ type: 'people' }]
        }
    ]
};

export default peopleObject;