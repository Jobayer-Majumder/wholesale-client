import React from 'react';
import categoryData from './categoryData';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';


const Category = () => {
    console.log(categoryData);

    return (
        <section className='bg-gray-50'>
            <div className="max-w-6xl px-4 sm:px-6 m-auto py-12">
                <div className="flex justify-between items-center py-2">
                    <h2 className="md:text-xl uppercase text-red-500 font-bold">
                        <BiCategoryAlt className='inline mr-1 mb-1' />
                        Top Categories
                    </h2>
                    <button className='text-blue-500'>
                        See All Category
                        <MdOutlineKeyboardArrowRight className='inline text-xl mb-0.5' />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        categoryData.map((data, index) => <div className='bg-white shadow flex justify-center items-center' key={index}>
                            <div className="px-2 py-2 text-center">
                                <img className='h-44' src={data.icon} alt="" />
                                <h2 className="">
                                    {data.name}
                                </h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;