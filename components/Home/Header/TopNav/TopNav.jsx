import React from 'react';

const TopNav = () => {
    return (
        <nav className='bg-gray-50 py-1'>
            <div className="max-w-6xl px-4 sm:px-6 mx-auto">
                <div className="grid grid-cols-3 md:grid-cols-3 text-sm">
                    <div className="col-span-1 md:col-span-1">
                        <p className="">
                            Welcome to Clothing Wholesale!
                        </p>
                    </div>
                    <div className="col-span-2 md:col-span-2 flex gap-4 justify-end">
                        <p className="">
                            Help
                        </p>
                        <select name="" id="" className='bg-gray-50 outline-none focus:ring-1 text-center rounded-md'>
                            <option value="" selected>
                                Language
                            </option>
                            <option value="Bengali">
                                Bengali
                            </option>
                            <option value="English">
                                English
                            </option>
                        </select>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;