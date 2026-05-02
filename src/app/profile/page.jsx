'use client';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaEdit, FaCalendarAlt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import 'animate.css';
import Navbar from '../components/shared/Navbar';

const ProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const session = await authClient.getSession();
            if (!session?.data?.user) {
                router.push('/login?returnUrl=/profile');
            } else {
                setUser(session.data.user);
                setShowAnimation(true);
                setTimeout(() => setShowAnimation(false), 1000);
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="container mx-auto px-4 py-10">
            <div className='mb-8'><Navbar></Navbar></div>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                <p className="text-gray-500 mt-1">Manage your account information</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card - Left Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover border-4 border-green-100"
                                />
                            ) : (
                                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <FaUser className="text-5xl text-green-600" />
                                </div>
                            )}
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-500 text-sm mt-1">{user.email}</p>
                        
                        <div className="mt-6">
                            <Link href="/profile/update">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    <FaEdit /> Update Information
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Profile Details - Right Content */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800">Profile Information</h3>
                            <p className="text-gray-500 text-sm mt-1">Your personal details</p>
                        </div>
                        
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-4 p-3 rounded-lg">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaUser className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Full Name</p>
                                    <p className="font-semibold text-gray-800">{user.name || 'Not provided'}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 rounded-lg">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaEnvelope className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email Address</p>
                                    <p className="font-semibold text-gray-800">{user.email}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-3 rounded-lg">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaCalendarAlt className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Member Since</p>
                                    <p className="font-semibold text-gray-800">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;