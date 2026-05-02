'use client';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaUpload, FaUser, FaEnvelope } from 'react-icons/fa';
import 'animate.css';

const UpdateProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: ''
    });
    const [imagePreview, setImagePreview] = useState('');


    useEffect(() => {
        const checkAuth = async () => {
            const session = await authClient.getSession();
            if (!session?.data?.user) {
                router.push('/login?returnUrl=/profile/update');
            } else {
                setUser(session.data.user);
                setFormData({
                    name: session.data.user.name || '',
                    image: session.data.user.image || ''
                });
                setImagePreview(session.data.user.image || '');
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const url = e.target.value;
        setFormData(prev => ({ ...prev, image: url }));
        setImagePreview(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdating(true);

        const { data, error } = await authClient.updateUser({
            name: formData.name,
            image: formData.image || undefined
        });

        if (error) {
            alert(error.message);
            setUpdating(false);
            return;
        }

        alert('Profile updated successfully!');
        router.push('/profile');
        setUpdating(false);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-3xl">
            {/* Back Button */}
            <Link href="/profile" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 font-semibold">
                <FaArrowLeft /> Back to Profile
            </Link>

            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Update Information</h1>
                <p className="text-gray-500 mt-1">Update your profile details</p>
            </div>

            {/* Current Profile Card */}
            {user && (
                <div className="bg-green-50 rounded-xl p-6 mb-6 border border-green-200">
                    <h3 className="font-semibold text-gray-800 mb-3">Current Information</h3>
                    <div className="flex items-center gap-4">
                        {user.image ? (
                            <div className="relative w-16 h-16">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover border-2 border-green-300"
                                />
                            </div>
                        ) : (
                            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                                <FaUser className="text-2xl text-green-600" />
                            </div>
                        )}
                        <div>
                            <p className="font-semibold text-gray-800">{user.name}</p>
                            <p className="text-gray-500 text-sm flex items-center gap-1"><FaEnvelope /> {user.email}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Update Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Image URL */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Profile Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleImageChange}
                            placeholder="https://example.com/your-image.jpg"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        />
                        <p className="text-xs text-gray-400 mt-1">Enter a valid image URL (optional)</p>
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div className="bg-gray-50 rounded-lg p-4">
                            <label className="block text-gray-700 font-semibold mb-2">Preview</label>
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-green-300">
                                <Image
                                    src={imagePreview}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={updating}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {updating ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                Updating...
                            </>
                        ) : (
                            <>
                                <FaUpload /> Update Information
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;