import React from 'react';
import './Sidebar.css';

const Sidebar = ({ bookmark }) => {
    let readTime = 0;
    for (const time of bookmark) {
        console.log(time);
        readTime = readTime + parseInt(time.read_time);
    }
    return (
        <div className='sticky top-0'>
            <div className='border-2 border-indigo-600 rounded bg-secondary p-4  text-primary mb-6'>Spent time on read : {readTime} min</div>
            <div className='border-2 rounded-md p-4 bg-secondary'>Bookmarked Blogs : </div>
        </div>
    );
};

export default Sidebar;