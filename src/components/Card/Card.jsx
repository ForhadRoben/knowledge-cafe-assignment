import React, { useEffect, useState } from 'react';
import './Card.css';
import SingleCard from '../SingleCard/SingleCard';

const Card = () => {
    const [cardItems, setCardItems] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCardItems(data))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 bg-secondary'>
                {cardItems.map(singleCard => <SingleCard
                    key={singleCard.id}
                    a={singleCard}
                ></SingleCard>)}
            </div>
            <div className='bg-primary'>this is sidebar</div>
        </div>
    );
};

export default Card;