import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {

    return (
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NFJZZ34X"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow bg-white">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout