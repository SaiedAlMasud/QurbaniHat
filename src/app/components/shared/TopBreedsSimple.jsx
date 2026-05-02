import Image from 'next/image';

const TopBreedsSimple = () => {
    const topBreeds = [
        {
            id: 1,
            name: "Holstein Friesian",
            origin: "Netherlands",
            description: "High milk production and excellent meat quality. Perfect for Qurbani.",
            image: "/assets/cow-2.jpg",
            price: "185,000"
        },
        {
            id: 2,
            name: "Local Deshi Cow",
            origin: "Bangladesh",
            description: "Traditional Bangladeshi breed, well-adapted to local climate.",
            image: "/assets/cow-1.jpg",
            price: "120,000"
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Top Breeds</h2>
                    <p className="text-gray-500">Most popular breeds for Qurbani</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {topBreeds.map((breed) => (
                        <div key={breed.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                            <div className="relative h-48 md:h-auto md:w-2/5">
                                <Image
                                    src={breed.image}
                                    alt={breed.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 md:w-3/5">
                                <h3 className="text-xl font-bold text-gray-800">{breed.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">Origin: {breed.origin}</p>
                                <p className="text-gray-600 text-sm mb-3">{breed.description}</p>
                                <p className="text-lg font-bold text-green-600">৳{breed.price}</p>
                                    <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
                                        View Details
                                    </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopBreedsSimple;