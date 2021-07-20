const pageBuilderContent = {
    name: 'pageBuilderContent',
    title: 'Content',
    type: 'object',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'body', type: 'bodyPortableText', title: 'Body' },
        { name: 'image', type: 'imageFigure', title: 'Image'}
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image'
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

export default pageBuilderContent;