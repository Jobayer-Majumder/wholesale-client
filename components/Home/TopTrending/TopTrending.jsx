import React from 'react';
import { BiStoreAlt } from 'react-icons/bi';
import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import newArrivalData from '../NewArrival/newArrivalData';



const a = ['a', 'b', 'c', 'd', 'f'];
const star = new Array(a)


const TopTrending = () => {
    return (
        <section className='bg-gray-50 py-4'>
            <div className="flex justify-between items-center py-2">
                <h2 className="md:text-xl uppercase text-red-500 font-bold">
                    <BiStoreAlt className='inline mr-1 mb-1' />
                    Top Trending
                </h2>
                <button className='text-blue-500'>
                    See More
                    <MdOutlineKeyboardArrowRight className='inline text-xl mb-0.5' />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    newArrivalData.map(data => <div className='bg-white shadow flex justify-center items-center' key={data.id}>
                        <div className="px-2 py-2 text-center">
                            <img className='h-44' src={data.pdImg} alt="" />
                            <h3 className="">
                                {data.pdName}
                            </h3>
                            
                            <div className='flex py-1 gap-1.5 justify-center'>
                                {
                                    star[0].map((d, index) =>

                                        <BsFillStarFill className='inline text-sm text-red-600 text-center' key={index} />

                                    )
                                }
                            </div>
                            <p className="font-semibold text-sm font-mono">
                                BDT{data.pdPrice}
                            </p>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    );
};

export default TopTrending;