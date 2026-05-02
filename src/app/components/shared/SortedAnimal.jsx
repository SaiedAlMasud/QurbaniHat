"use client";
import React, { useEffect, useState } from 'react';
import AnimalCard from './AnimalCard';
import LoadingSpinner from './LoadingSpinner';

const SortedAnimal = ({ animals: initialAnimals }) => {
    const [animals, setAnimals] = useState(initialAnimals);
    const [sortOption, setSortOption] = useState('default');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimals(initialAnimals);
            setLoading(false);
        }, 500);
    }, []);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value);
        
        let sortedAnimals = [...initialAnimals];
        
        if (value === 'highTolow') {
            sortedAnimals.sort((a, b) => b.price - a.price);
        } else if (value === 'lowTohigh') {
            sortedAnimals.sort((a, b) => a.price - b.price);
        } else {
            sortedAnimals = [...initialAnimals];
        }
        
        setAnimals(sortedAnimals);
    };
    if (loading) {
        return <LoadingSpinner />;
    }


    return (
        <>
            <div className="flex justify-between my-5">
                <h1 className="text-3xl font-bold">All Animals</h1>
                <select 
                    value={sortOption}
                    onChange={handleSortChange}
                    className='border-2 border-gray-300  px-7 rounded-xl text-gray-600 focus:outline-none focus:ring-green-500'
                >
                    <option value="default">Sort by Default</option>
                    <option value="highTolow">Price: High to Low</option>
                    <option value="lowTohigh">Price: Low to High</option>
                </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {animals.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </>
    );
};

export default SortedAnimal;