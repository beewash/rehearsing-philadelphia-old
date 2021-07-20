const page = {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'title',
              maxLength: 96
            }
          },
        {
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'pageBuilder'
        }
    ],
    preview: {
        select: {
          title: 'title',
          slug: 'slug'
        },
        prepare ({title = 'No title', slug = {}}) {
          return {
            title,
            subtitle: slug.current
          }
        }
      }    
};

export default page;