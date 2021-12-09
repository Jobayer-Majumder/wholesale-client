import React from 'react';
import { BiMessageDots, BiUser } from 'react-icons/bi';


const Navbar = () => {
    return (
        <nav className='border-b'>
            <div className="max-w-6xl px-4 sm:px-4 m-auto">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <img className='w-1/3 h-16 rounded-lg' src="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1603349437/content-items/006/050/243/1-original.png?1603349437" alt="brand logo" />
                    </div>
                    <div className="md:col-span-2 flex justify-center items-center">
                        <div className="w-full">
                            <input type="text" className="w-4/5 px-5 py-2 bg-gray-50 outline-none focus:ring-1 border border-gray-200 rounded-l-md" placeholder='Search Items' />
                            <button className='focus:ring-1 px-2 py-2 rounded-r-md bg-red-500 text-white'>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-1 flex justify-end items-center gap-4 ">

                        <button className=''>
                            <BiMessageDots className='text-lg inline mr-1' />
                            Message
                        </button>
                        <button className=''>
                            <BiUser className='inline mr-1 text-lg' />
                            My Account
                        </button>
                    </div>
                </div>
                <div className="py-2">
                    <ul className='flex gap-5'>
                        <li>SALE</li>
                        <li>New Arrivals</li>
                        <li>Holy Ramadan</li>
                        <li>Fall & Winter</li>
                        <li>Bangs & Totes</li>
                        <li>Accessories</li>
                        <li>Home & Gift</li>
                        <li>Season & Collection</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;