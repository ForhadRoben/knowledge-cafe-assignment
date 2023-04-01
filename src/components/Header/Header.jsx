import React from 'react';
import './Header.css';
import logo from '../../assets/IMG_0233.jpg';

const Header = () => {
    return (
        <div>
            <div className="navbar flex justify-between bg-secondary rounded">
                <a className="btn btn-ghost normal-case text-2xl text-primary font-bold">Knowledge Cafe</a>
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