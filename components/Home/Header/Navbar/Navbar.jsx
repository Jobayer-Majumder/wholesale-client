import React from 'react';
import { BiMessageDots, BiUser } from 'react-icons/bi';
import { MdOutlineShoppingBasket } from 'react-icons/md';


const Navbar = () => {
    return (
        <nav className='border-b'>
            <div className="max-w-7xl px-4 sm:px-6 m-auto">
                <div className="grid grid-cols-4 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <img className='w-1/3 h-16 rounded-lg' src="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1603349437/content-items/006/050/243/1-original.png?1603349437" alt="brand logo" />
                    </div>
                    <div className="col-span-2 md:col-span-2 flex justify-center items-center">
                        <div className="w-full">
                            <input type="text" className="w-4/5 px-5 py-2 bg-gray-50 outline-none focus:ring-1 border border-gray-200 rounded-l-md" placeholder='Search Items' />
                            <button className='focus:ring-1 px-2 py-2 rounded-r-md bg-red-500 text-white'>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 flex justify-evenly items-center gap-4 ">

                        {/* <div className="flex flex-col justify-center items-center"> */}
                            {/* <HiOutlineShoppingBag className='text-lg text-red-500' /> */}
                            <button className='text-sm'>
                            <MdOutlineShoppingBasket className='text-lg text-red-500 inline mr-1 mb-0.5' />
                                Cart
                            </button>
                        {/* </div> */}
                        {/* <div className="flex flex-col justify-center items-center"> */}
                            {/* <BiMessageDots className='text-lg text-red-500' /> */}
                            <button className='text-sm'>
                            <BiMessageDots className='text-lg text-red-500 inline mr-1' />
                                Message
                            </button>
                        {/* </div> */}
                        {/* <div className="flex flex-col justify-center items-center"> */}
                        {/* <BiUser className='text-lg text-red-500' /> */}
                        <button className='text-sm'>
                            <BiUser className='text-lg text-red-500 inline mr-1 mb-0.5' />
                            My Account
                        </button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="py-2">
                    <ul className='flex gap-5 text-sm'>
                        <li>Flash SALE</li>
                        <li>New Arrivals</li>
                        <li>Buying Guide</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;