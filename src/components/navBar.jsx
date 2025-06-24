import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-xl font-semi-bold text-gray-800">The Perfect Spot</div>
                    <div className="flex items-center justify-center space-x-4">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="hidden sm:block w-full max-w-md px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        <div className="hidden md:flex space-x-2">
                            <a href="#home" className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded">User</a>
                            <a href="#about" className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded">Owner</a>
                            <a href="#contact" className="text-gray-600 hover:text-black hover:bg-black/10 px-2 py-1 rounded">Logout</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
                    <a href="#home" className="block text-gray-600 hover:text-black">Home</a>
                    <a href="#about" className="block text-gray-600 hover:text-black">About</a>
                    <a href="#contact" className="block text-gray-600 hover:text-black">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
