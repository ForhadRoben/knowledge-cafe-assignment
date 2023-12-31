import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const SingleCard = (props) => {
    // console.log(props.singleCard);
    const { author_img, author_name, blog_title, cover_img, hash_tag, publish_date, read_time } = props.singleCard;
    const handleReadTime = props.handleReadTime;
    const handleBookmark = props.handleBookmark;

    return (
        <div>
            <div className="card glass my-6">
                <img className='img-size' src={cover_img} alt="img_loaded" />
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <img className='h-16 w-16 rounded-full' src={author_img} alt="img_loaded" />
                            <div className='ml-4'>
                                <h6 className='font-bold'>{author_name}</h6>
                                <p>{publish_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div>{read_time}</div>
                            <button><FontAwesomeIcon className='ml-2' onClick={() => handleBookmark(props.singleCard)} icon={faBookmark} /></button>

                        </div>
                    </div>
                    <h2 className="card-title">{blog_title}</h2>
                    <p>{hash_tag}</p>
                    <button className='font-bold text-primary border-b-2 border-error w-28' href='' onClick={() => handleReadTime(props.singleCard)} >Mark as Read</button>
                    <hr />

                </div>
            </div>
        </div>
    );
};

export default SingleCard;