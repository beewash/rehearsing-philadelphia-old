const pageBuilder = {
    name: 'pageBuilder',
    title: 'Page Builder',
    type: 'array',
    of: [
        {
            type: 'pageBuilderContent',
            title: 'Content',
        },
        {
            type: 'pageBuilderColumns',
            title: 'Columns',
        }
    ]
};

export default pageBuilder;