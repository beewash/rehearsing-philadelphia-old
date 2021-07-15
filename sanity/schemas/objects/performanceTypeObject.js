const performanceTypeObject = {
    name: 'performanceTypeObject',
    type: 'object',
    fields: [
        {
            title: 'Name of item',
            name: 'itemName',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Performance Category List',
            name: 'performanceCatList',
            type: 'reference',
            to: [{ type: 'performanceCat' }],
        }
    ]
};

export default performanceTypeObject;