import AnimalCard from './AnimalCard';
import animalData from '@/data/data.json'
const FeatureSection = () => {
    return (
        <div className='my-5 space-y-5'>
            <h1 className="text-4xl font-bold ml-3 text-green-700">
                Featured Animals
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    animalData.slice(0, 4).map((animal) => {
                        return <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                    })
                }
            </div>
        </div>
    );
};

export default FeatureSection;