'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BookingModal from './BookingModal';
import { authClient } from '@/lib/auth-client';

const BookingButton = ({ animal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        authClient.getSession().then(session => setIsLoggedIn(!!session?.data?.user));
    }, []);

    const handleClick = () => {
        if (isLoggedIn) {
            setIsOpen(true);
        } else {
            router.push(`/login?returnUrl=/details/${animal.id}`);
        }
    };

    return (
        <>
            <button onClick={handleClick} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                Book Now
            </button>
            <BookingModal animal={animal} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default BookingButton;