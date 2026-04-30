import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import animalsData from '@/data/data.json'; // Direct import
import { IoMdArrowRoundBack } from 'react-icons/io';

const AnimalDetailsPage  = async ({ params }) => {
    const { id } =await params;
    // Find the animal directly from imported data
    const animal = animalsData.find(a => a.id === parseInt(id));
    
    if (!animal) {
        notFound();
    }
    
    return (
        <div className="py-10 max-w-7xl mx-auto px-4">
            {/* Back Button */}
            <div className="mb-6">
                <Link href="/allanimals" className="text-green-600 hover:text-green-700 flex gap-3 items-center font-bold">
                    <IoMdArrowRoundBack />Back to All Animals
                </Link>
            </div>
            
            {/* Animal Details */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-full min-h-100 bg-gray-100">
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    
                    {/* Details Section */}
                    <div className="p-6 lg:p-8 space-y-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                                {animal.name}
                                <span className="badge bg-green-300 rounded-full ml-5 px-5 py-3">{animal.category}</span>
                            </h1>
                            <p className="text-gray-500 mt-2">{animal.breed}</p>
                        </div>
                        
                        <div className="border-t border-b border-gray-100 py-4">
                            <p className="text-3xl font-bold text-green-600">
                                ৳{animal.price.toLocaleString()}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 text-md">Weight</p>
                                <p className="font-semibold">{animal.weight} kg</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-md">Age</p>
                                <p className="font-semibold">{animal.age} years</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-md">Location</p>
                                <p className="font-semibold">{animal.location}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-md">Type</p>
                                <p className="font-semibold">{animal.type}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Description</h3>
                            <p className="text-gray-600">{animal.description}</p>
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                                Book Now
                            </button>
                            <button className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-lg">
                                Contact Seller
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailsPage ;