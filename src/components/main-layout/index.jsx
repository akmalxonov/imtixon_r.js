import React from 'react';
import Navbar from '../navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../footer';
const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <div className="container">
                    <Outlet />
                    <Toaster position='top right'/>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default MainLayout;
