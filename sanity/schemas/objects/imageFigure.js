const imageFigure = {
    name: 'imageFigure',
    type: 'image',
    title: 'Image Figure',
    options: {
        hotspot: true // <-- Defaults to false
      },
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text'
        }
    ],
};

export default imageFigure;