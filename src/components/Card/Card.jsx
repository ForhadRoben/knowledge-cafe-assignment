import React, { useEffect, useState } from 'react';
import './Card.css';
import SingleCard from '../SingleCard/SingleCard';
import Sidebar from '../Sidebar/Sidebar';

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
        // cart.push(product); 
        const newReadTime = [...readTime, singleCard];
        setReadTime(newReadTime);
    }

    const handleBookmark = (singleCard) => {
        const newBookmark = [...bookmark, singleCard];
        setBookmark(newBookmark)
    }
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 '>
                {cardItems.map(singleCard => <SingleCard
                    key={singleCard.id}
                    singleCard={singleCard}
                    handleReadTime={handleReadTime}
                    handleBookmark={handleBookmark}
                ></SingleCard>)}
            </div>
            <div className='mt-6 mx-auto text-2xl font-bold'>
                <Sidebar readTime={readTime}
                    bookmark={bookmark}></Sidebar>
            </div>
        </div>
    );
};

export default Card;