import React from 'react';
import { BsGift } from 'react-icons/bs'


const CouponCode = () => {
    return (
        <section>
            <div className="grid grid-cols-6 py-3 mb-2 font-semibold">
                <div className="col-span-1 bg-red-600 text-white flex gap-3 justify-center items-center">
                    {/* <h3 className=""></h3> */}
                    <BsGift className='text-lg'/>
                    <h3 className="text-sm">
                        GIFT <br /> SPECIAL
                    </h3>
                </div>
                <div className="col-span-4 py-4 bg-gray-50 flex justify-center items-center">
                    <h2 className="text-xs text-center">
                        Wrap new offers/Gift every single day on weekends - New Coupon Code: <span className="text-red-600">happyRomadan2022</span>
                    </h2>
                </div>
                <div className="col-span-1 bg-gray-50 flex justify-center items-center">
                    <button className='px-3 py-1 bg-red-600 text-white rounded-md'>
                        Get Coupon
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CouponCode;