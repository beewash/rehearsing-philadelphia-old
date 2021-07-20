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
    preview: {
      select: {
        title: 'title',
        media: 'imageFigure'
      },
      prepare ({title, media}) {
        return {
          title,
          media,
          subtitle: 'Content'
        }
      }
    }
};

export default imageFigure;