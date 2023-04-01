import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const { blog_title } = props.count;
    // console.log(props);
    return (
        <div>
            <p className='font-semibold border-2 rounded-md p-4 m-4 text-lg'>{blog_title}</p>
        </div>
    );
};

export default Bookmark;