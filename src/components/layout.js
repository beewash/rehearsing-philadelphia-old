import React from 'react';
import Header from './header';

const Layout = ({children}) => {
  return (
    <>
    <section className='Skip'>
    </section>
    <Header />
    <main id='main-content'>{children}</main>
  </>
  )
}

export default Layout