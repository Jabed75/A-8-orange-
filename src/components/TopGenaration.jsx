import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenaration = async() => {
   const res = await fetch('http://localhost:3000/data.json')
    const photos=await res.json()
    const topPhotos =photos.slice(0,6)

    return (
        <div>
            <h2 className='text-4xl font-bold my-5'>All Cards</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
        
        
    );
};

export default TopGenaration;