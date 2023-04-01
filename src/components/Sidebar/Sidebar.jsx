import React from 'react';
import './Sidebar.css';
import Bookmark from '../Bookmark/Bookmark';

const Sidebar = ({ readTime, bookmark }) => {
    let readingTime = 0;
    let quantity = 0;
    let blogDetails = [];
    for (const time of readTime) {
        // console.log(time);
        readingTime = readingTime + parseInt(time.read_time);
        // quantity = quantity + 1;
    }

    for (const count of bookmark) {
        // console.log(count);
        quantity = quantity + 1;
        blogDetails.push(count);

    }
    return (
        <div className='sticky top-0'>
            <div className='border-2 border-indigo-600 rounded bg-secondary p-4  text-primary mb-6'>Spent time on read : {readingTime} min</div>
            <div className='border-2 rounded-md p-4 bg-secondary '>
                <h3>Bookmarked Blogs : {quantity}</h3>
                {
                    blogDetails.map(count => <Bookmark
                        count={count}
                        key={count.id}
                    ></Bookmark>)
                }

            </div>
        </div>
    );
};

export default Sidebar;