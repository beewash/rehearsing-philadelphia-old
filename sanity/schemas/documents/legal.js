import { AiOutlineUpload } from 'react-icons/ai';

const legal = {
    name: 'legal',
    title: 'Legal Documents',
    type: 'document',
    icon: AiOutlineUpload,
    fields: [
        {
            name: 'documentName',
            title: 'Document Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'documentUpload',
            title: 'Upload Document',
            description: 'Upload .pdf here',
            type: 'file',
            validation: (Rule) => Rule.required()
        },
    ]
};

export default legal;