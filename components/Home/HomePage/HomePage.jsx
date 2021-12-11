import React from 'react';
import Header from '../Header/Header/Header';
import Banner from '../Banner/Banner';
import categoryData from '../Category/categoryData';
import NewArrival from '../NewArrival/NewArrival';
import ShortStrategies from '../ShortStrategies/ShortStrategies';
import CouponCode from '../CouponCode/CouponCode';
import TopTrending from '../TopTrending/TopTrending';

const HomePage = () => {
    return (
        <section className=''>
            {/* <div className="fixed w-full"> */}
                <Header />
            {/* </div> */}
            <section className="">
                <div className="max-w-7xl px-4 sm:px-6 m-auto">
                    <div className="grid grid-cols-10 gap-4 pt-8">
                        <div className="col-span-2 shadow max-h-screen px-4">
                            <h2 className="font-bold text-lg uppercase pb-2">
                                Categories
                            </h2>
                            <ul className='text-sm'>
                                {
                                    categoryData.map((d, index) => <li className='py-1' key={index}>
                                        {d.name}
                                    </li>)
                                }
                            </ul>
                        </div>
                        <div className="col-span-8">
                            <Banner />
                            <ShortStrategies />
                            <CouponCode />
                            <NewArrival />
                            <TopTrending />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default HomePage;