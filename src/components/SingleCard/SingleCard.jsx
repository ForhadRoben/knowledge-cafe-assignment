import React from 'react';
import './SingleCard.css';

const SingleCard = (props) => {
    // console.log(props.singleCard);
    const { author_img, author_name, blog_title, cover_img, hash_tag, publish_date, read_time } = props.singleCard;
    return (
        <div>
            <div className="card glass mt-6">
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
                        <div>
                            <div>{read_time}</div>
                            {/* bookmark */}
                        </div>
                    </div>
                    <h2 className="card-title">{blog_title}</h2>
                    <p>{hash_tag}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleCard;