'use client';
import { useState } from 'react';

const BookingModal = ({ animal, isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', address: '' });
        setTimeout(() => {
            setSuccess(false);
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">✕</button>
                
                {success ? (
                    <div className="text-center py-8">
                        <div className="text-green-600 text-5xl mb-4">✓</div>
                        <h3 className="text-xl font-bold">Booking Successful!</h3>
                        <p className="text-gray-600 mt-2">We&apos;ll contact you soon.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Book {animal.name}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" placeholder="Full Name" required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            <input type="email" name="email" placeholder="Email" required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            <input type="tel" name="phone" placeholder="Phone" required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            <textarea name="address" placeholder="Address" rows="2" required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                                value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                                Confirm Booking
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookingModal;