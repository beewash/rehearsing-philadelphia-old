import React, { useState, useEffect } from 'react';
import PortableText from './portableText';
import { sanity } from '../sanity';

const PageBuilderColumns = ({block, raw}) => {
  //const {columns} = block;

  const [columnData, setColumn] = useState(null);

  useEffect(() => {
    sanity.fetch(`
    *[_type == "page"]{
      pageBuilder[]{
        _key, 
        _type,
        columns[]{
          title
        }
      }
    }
    `)
    .then((data) => setColumn(data))
    .catch(console.error);
  }, []);

  return (
    <section className='bg-teal-100'>
      <div className='container mx-auto md:flex py-4'>
        {columnData && columnData.map((column, index) =>
          <div className='md:w-1/3 p-4'>
            <div className='bg-white border border-teal-200 rounded p-4'>
              <h2 className='text-2xl text-teal-600 font-bold mb-5'>
                {column.pageBuilder.columns.title}
              </h2>
              <PortableText blocks={raw.column[index].body} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderColumns
