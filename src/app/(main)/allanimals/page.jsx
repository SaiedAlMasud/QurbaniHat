import React from 'react';
import animaldata from '@/data/data.json';
import SortedAnimal from '@/app/components/shared/SortedAnimal';

const AllAniumalPage = () => {
    return (
        <div className="container mx-auto px-4">
            <SortedAnimal animals={animaldata} />
        </div>
    );
};

export default AllAniumalPage;