import Image from "next/image";
import navIamge from "../../../assets/navbar.png"
import Link from "next/link";
import NavLink from "./NavLink";


const Navbar = () => {
    return (
        <div id="navbar" className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-md">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/allanimals">All Animals</NavLink></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Image src={navIamge} width={65} height={65} alt=""></Image>
                    <a className="text-xl font-bold text-green-700">QurbaniHat</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-green-700 space-x-8">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/allanimals">All Animals</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-600">Button</a>
            </div>
        </div>
    );
};

export default Navbar;