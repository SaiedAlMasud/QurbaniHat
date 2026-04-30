import React from 'react';
import animaldata from '@/data/data.json'
import AnimalCard from '@/app/components/shared/AnimalCard';
const AllAniumalPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
                {
                    animaldata.map((animal) => {
                        return <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    })
                }
            </div>
    );
};

export default AllAniumalPage;