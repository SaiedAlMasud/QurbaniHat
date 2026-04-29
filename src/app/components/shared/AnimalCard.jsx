import Image from 'next/image';
import React from 'react';

const AnimalCard = ({animal}) => {
    return (
        <div className='rounded-lg shadow-md p-5'>
            <Image src={animal.image} 
            alt="Cow" width={350} height={350} 
            className='rounded-lg'></Image>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold '>{animal.name}</h1>
                <p className='text-lg '>Weight: <span className='text-lg font-semibold '>{animal.weight}</span></p>
                <p className='text-lg '>Location: <span className='text-lg font-semibold '>{animal.location}</span></p>
                <p className='text-lg '>Price: <span className='text-lg font-semibold '>{animal.price}</span></p>
                <button className='btn bg-green-700 text-white rounded-full'>View Details</button>
            </div>
        </div>
    );
};

export default AnimalCard;