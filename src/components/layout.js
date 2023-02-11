import React from 'react'
import Caption from './caption'
import Celebrities from './celebrities'
import Footer from './footer'
import Navbar from './navbar'

function Layout({ children }) {
    return (
        <div className='main__layout'>
            <Navbar/>
            <Caption />
            <main>
                {children}
            </main>
            <Celebrities />
            <Footer />
        </div>
    )
}

export default Layout