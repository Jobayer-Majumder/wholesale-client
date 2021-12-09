import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopNav from '../TopNav/TopNav';

const Header = () => {
    return (
        <nav>
            <TopNav />
            <Navbar />
        </nav>
    );
};

export default Header;