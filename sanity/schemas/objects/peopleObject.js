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
    ],
    preview: {
        select: {
          title: 'personName',
          media: 'imageFigure',
          subtitle: 'title'
        },
        prepare ({title, media, subtitle}) {
          return {
            title,
            media,
            subtitle
          }
        }
    }
};

export default peopleObject;