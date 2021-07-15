import { GrNavigate } from "react-icons/gr";

const navItems = {
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    icon: GrNavigate,
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Navigation Text'
        },
        {
            name: 'navigationItemUrl',
            type: 'navLink',
            title: 'Navigation Item URL'
        }
    ]
};

export default navItems;