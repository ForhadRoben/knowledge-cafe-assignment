import React from 'react';
import './Header.css';
import logo from '../../assets/IMG_0233.jpg';

const Header = () => {
    return (
        <div>
            <div className="container mx-auto navbar flex justify-between bg-secondary">
                <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
                <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;