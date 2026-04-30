import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalCard = ({ animal }) => {
    return (
        <div className='rounded-lg shadow-md p-5'>
            <div className="w-full h-64 relative mb-4">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                />
            </div>
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold '>{animal.name}</h1>
                <p className='text-lg '>Weight: <span className='text-lg font-semibold '>{animal.weight}</span></p>
                <p className='text-lg '>Location: <span className='text-lg font-semibold '>{animal.location}</span></p>
                <p className='text-lg '>Price: <span className='text-lg font-semibold '>{animal.price}</span></p>
                <Link href={`/details/${animal.id}`}>
                    <button className='btn bg-green-700 text-white rounded-full hover:text-green-700 hover:bg-white transition-colors w-full'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AnimalCard;