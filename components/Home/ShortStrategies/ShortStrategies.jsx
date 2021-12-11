import React from 'react';
import { FiTruck } from 'react-icons/fi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { GiLovers } from 'react-icons/gi';


const strategyData = [
    {
        title: 'Same Day Delivery',
        icon: <FiTruck />
    },
    {
        title: 'Trusted Quality',
        icon: <VscWorkspaceTrusted />
    },
    {
        title: 'Our "Love It" Guarantee',
        icon: <GiLovers />
    },
]

const ShortStrategies = () => {
    return (
        <section>
            <div className="grid grid-cols-3 gap-6 py-6">
                {
                    strategyData.map((d, index) => <div className='bg-red-600 flex gap-2 justify-center items-center text-white font-semibold py-4' key={index}>
                        <h3 className="text-lg">
                            {d.icon}
                        </h3>
                        <h3 className="uppercase">
                            {d.title}
                        </h3>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ShortStrategies;