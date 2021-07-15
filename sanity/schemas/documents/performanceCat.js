import { BsTag } from 'react-icons/bs';

const performanceCat = {
    name: 'performanceCat',
    title: 'Performance Category',
    type: 'document',
    icon: BsTag,
    preview: {
        select: {
          title: 'category',
          media: 'performanceIcon'
        }
      },
    fields: [
        {
            name: 'category',
            type: 'string',
            title: 'Category',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'richText'
        },
        {
            name: 'description',
            type: 'richText',
            title: 'Category Description',
        },
        {
            name: 'performanceIcon',
            type: 'imageFigure',
            title: 'Icon',
        }
    ],
};

export default performanceCat;