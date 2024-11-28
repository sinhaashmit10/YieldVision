import logo from "../assets/crops.svg";
import { navItems } from "../constants";
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 text-green-900 backdrop-blur-lg border-neutral-700/90 ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-5 w-5 mr-2" src={logo} alt="Fable logo" />
                        <span className="text-xl text-green-900 font-bold tracking-tight">
                            Yield Vision
                        </span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    activeClass="active"
                                    to={item.href} // Assuming href matches section ID
                                    spy={true}
                                    smooth={true}
                                    offset={-80} // Default offset for other links
                                    duration={700}
                                    className="cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex text-white justify-center space-x-12 items-center">
                        <Link
                            to="Contacts" // Change to the ID of the Contact section
                            spy={true}
                            smooth={true}
                            offset={-5} // Specific offset for the Contact Us button
                            duration={700}
                            className="bg-gradient-to-r from-green-500 to-green-900 py-2 px-3 rounded-md cursor-pointer"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col text-white justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <Link
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-80} // Default offset for other links
                                        duration={700}
                                        className="cursor-pointer"
                                        onClick={toggleNavbar}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <Link
                                to="Contacts" // Change to the ID of the Contact section
                                spy={true}
                                smooth={true}
                                offset={-5} // Specific offset for the Contact Us button
                                duration={700}
                                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md cursor-pointer"
                                onClick={toggleNavbar}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
