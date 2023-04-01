import React, { useEffect, useState } from 'react';
import './Card.css';
import SingleCard from '../SingleCard/SingleCard';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [cardItems, setCardItems] = useState([]);
    const [readTime, setReadTime] = useState([])
    const [bookmark, setBookmark] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCardItems(data))
    }, [])

    const handleReadTime = (singleCard) => {
        const newReadTime = [...readTime, singleCard];
        setReadTime(newReadTime);
    }

    const handleBookmark = (singleCard) => {
        // console.log(singleCard);
        const newBookmark = [...bookmark, singleCard];
        // console.log(newBookmark);
        if (bookmark.find(pd => pd.id === singleCard.id)) {
            toast("You Have Already Bookmarked This Blog")
            // return setBookmark;
        }
        setBookmark(newBookmark);

    }
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-3 md:col-span-2 '>
                {cardItems.map(singleCard => <SingleCard
                    key={singleCard.id}
                    singleCard={singleCard}
                    handleReadTime={handleReadTime}
                    handleBookmark={handleBookmark}
                ></SingleCard>)}
            </div>
            <div className='my-6 mx-auto text-2xl font-bold col-span-3 md:col-span-1 '>
                <Sidebar readTime={readTime}
                    bookmark={bookmark}></Sidebar>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Card;