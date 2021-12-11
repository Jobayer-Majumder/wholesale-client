import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-4">
                    <img className='w-full max-h-72' src="/Beautiful young women in fashion clothing.jpg" alt="" />
                </div>
                <div className="col-span-1 flex flex-col justify-between gap-3">
                <img className='w-full' src="https://blog.sociallyin.com/hubfs/17_brilliant_clothing_ads-01-1.png" alt="" />
                    <img className='w-full' src="https://poweradspy.com/wp-content/uploads/2021/05/Fashion-aDS-7.png" alt="" />
                    <img className='w-full' src="https://belk.scene7.com/is/image/Belk/wk26_spec_deswom_fh_1?$DWP_GRAPHIC$" alt="" />
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;