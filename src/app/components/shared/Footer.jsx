import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from 'react-icons/si';
import Image from 'next/image';
import logo from '../../../../public/assets/navbar.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Company Info */}
                    <div className="space-y-4">
                       <div className="flex gap-2 items-center">
                        <Image src={logo} alt = "logo" width={50} height={50} />
                         <h3 className="text-2xl font-bold text-green-400">QurbaniHat</h3>
                       </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your trusted platform for quality livestock booking and Qurbani services. 
                            Making your sacrifice easy, reliable, and blessed.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a 
                                href="#" 
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a 
                                href="#" 
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a 
                                href="#" 
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <RiInstagramFill className="h-6 w-6" />
                            </a>
                            <a 
                                href="#" 
                                className="text-gray-400 hover:text-green-400 transition-colors"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#navbar" className="text-gray-300 hover:text-green-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/allanimals" className="text-gray-300 hover:text-green-400 transition-colors">
                                    Browse Animals
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link  href="#qurbani-tips" className="text-gray-300 hover:text-green-400 transition-colors">
                                    Qurbani Tips
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Qurbani Guidelines */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-400">Qurbani Guidelines</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                                    Animal Health Requirements
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                                    Age Requirements
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                                    Meat Distribution Rules
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                                    Sunnah Practices
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                                    Frequently Asked Questions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-400">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <FaLocationDot className="h-5 w-5 text-green-400" />
                                <span className="text-gray-300 text-sm">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhoneAlt className="h-5 w-5 text-green-400" />
                                <span className="text-gray-300 text-sm">+880 1234 567890</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <SiGmail className="h-5 w-5 text-green-400" />
                                <span className="text-gray-300 text-sm">info@qurbanihat.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} QurbaniHat. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                                Refund Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;