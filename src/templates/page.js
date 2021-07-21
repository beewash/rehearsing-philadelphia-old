import React, { useState, useEffect } from 'react';
import { sanity } from '../sanity';
import Layout from '../components/layout';
//import PageBuilder from '../components/pageBuilder';

export default function PageTemplate() {
  //const {data} = props
  //const page = data && data.page
  //const {pageBuilder, _rawPageBuilder} = page
  const [pageData, setPage] = useState(null);

  useEffect(() => {
      sanity.fetch(`
      *[_type == "page"]{
        title,
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
      .then((data) => setPage(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      {/* <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} /> */}
      {pageData && pageData.map((page, index) => (
      <div>{page.title}</div>
      ))}
    </Layout>
  )
};

//export default PageTemplate


// export default function Page() {
//     const [pageData, setPage] = useState(null);

//     useEffect(() => {
//         sanity.fetch(`
//         *[_type == "page"]{
//             title,
//             id,
//             slug{
//                   current
//               },
//             pageBuilder[]{
//               _key,
//               _type,
//               body[]{
//                 _key, 
//                 _type,
//                 children[]{
//                   _key, 
//                   _type,
//                   marks,
//                   text
//                 }
//               },
//                   image{
//                 alt,
//                 asset->{
//                     url
//                       }
//               }
//             }
//           }
//         `)
//         .then((data) => setPage(data))
//         .catch(console.error);
//     }, []);

//     return (
//         <Layout>
//             {pageData && pageData.map((page, index) => (
//            <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
//            ))}
//         </Layout>
//     )
// }


// const PageTemplate = props => {
//     const {data} = props
//     const page = data && data.page
//     const {pageBuilder, _rawPageBuilder} = page

//     const [ pageData, setPage ] = useState(null);

//     useEffect(() => {
//         sanityClient.fetch(`*[_type == "page"]{
//             id,
//             ...PageBuilder,
//             title,
//             slug {
//               current
//             }
//             }`)
//             .then((data) => setPage(data))
//             .catch(console.error);
//     }, []);

//     return (
//         <Layout>
//             {pageData && pageData.map((page, index) => (
//           <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
//           ))}
//         </Layout>
//         )
    
// }

// export default PageTemplate

// export default function PageTemplate() {
//     const [ pageData, setPage ] = useState(null);

//     useEffect(() => {
//         sanityClient.fetch(`*[_type == "page"]{
//             id,
//             ...PageBuilder,
//             title,
//             slug {
//               current
//             }
//             }`)
//             .then((data) => setPage(data))
//             .catch(console.error);
//     }, []);

//     return (
//         <Layout>
//             <h1>This is a test</h1>
//             {pageData && pageData.map((page, index) => (
//           <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
//           ))}
//         </Layout>
//       )
// }
