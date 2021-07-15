import React from 'react';
import getYouTubeID from 'get-youtube-id';

const YoutubePreview = ({ value }) => {
    const id = getYouTubeID(value.url);
    const url = `https://www.youtube.com/embed/${id}`;
    if (!id) {
        return <div>Missing Youtube URL</div>;
    }
    return (
        <iframe 
            title= "Youtube Preview"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/kLsER_zHiS4"  
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        />
    )
};

const youtube = {
    name: 'youtube',
    type: 'object',
    title: 'Youtube Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL',
        },
    ],
    preview: {
        select: {
            url: 'url',
        },
        component: YoutubePreview,
    },
};

export default youtube;