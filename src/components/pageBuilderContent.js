import React, { Image, useEffect, useState } from 'react';
import sanity from '../sanity';
import PortableText from './portableText';

const PageBuilderContent = ({block, raw}) => {
  //const {title, image} = block;

  const [contentData, setContent] = useState(null);

  useEffect(() => {
    sanity.fetch(`
    *[_type == "page"]{
      pageBuilder[]{
        _key, 
        _type,
        title,
        image{
          alt, 
          asset{
            _ref
          }
        }
      }
    }
    `)
    .then((data) => setContent(data))
    .catch(console.error);
  }, []);

  return (
    <section className='container mx-auto md:flex py-8 md:py-16'>
    {contentData && contentData.map((content, index) =>
      <>
        <div className='md:w-1/3'>
            <Image
              src={content.pageBuilder.image.asset._ref || null}
              alt={content.pageBuilder.image.asset.alt}
              className={`w-full h-auto`}
            />
        </div>

        <div className='md:w-2/3 bg-indigo-100 rounded-r-lg p-8'>
          <h1 className='text-indigo-500 text-4xl leading-none font-bold mb-5'>
            {content.pageBuilder.title}
          </h1>
          <PortableText blocks={raw.body} />
        </div>
      </>
    )}
    </section>
  )
}

export default PageBuilderContent
