"use client";
import Image from "next/image";
import navIamge from "../../../assets/navbar.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaUser } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(session, "session")
    return (
        <div id="navbar" className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/allanimals">All Animals</NavLink></li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <Image src={navIamge} width={65} height={65} alt="Logo" />
                    <a className="text-xl font-bold text-green-700">QurbaniHat</a>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-green-700 gap-8">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/allanimals">All Animals</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end space-x-4">
                {
                    user ? (<p className="text-md text-green-800">Hello! {user.name}</p>) :
                        ("")
                }

                {user ? (
                    <>
                        <FaUser className="text-4xl text-green-700" />
                        <button onClick={async() => await authClient.signOut()} className="btn bg-green-600 text-white hover:bg-green-800">
                            LogOut
                        </button>
                    </>
                ) : (
                    <button className="btn bg-green-600 text-white hover:bg-green-800">
                        <Link href="/login">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;