import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {
    
    return (
        <div className="flex flex-col min-h-screen font-manrope">
            <Header/>
            <main className="flex-grow bg-white">{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout