
import React from 'react'
import Celebrities from './celebrities'
import Footer from './footer'
import Navbar from './navbar'



function Layout({ children }) {
    return (
        <div className='main__layout'>
            <Navbar/>
            <main>
                {children}
            </main>
            <Celebrities />
            <Footer />
        </div>
    )
}
export default Layout