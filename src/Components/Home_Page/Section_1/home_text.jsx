import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Home_text = () => {
    return (
        <>
            <div className='h-full w-1/3 flex justify-between flex-col px-5 py-5'>
                <div>
                    <h4 className='text-6xl font-bold text-gray-800 mb-5 tracking-wide leading-1.1'>This Is My <span>Arena</span> .</h4>
                    <h5 className='text-3xl text-gray-700'>Welcome Frd .</h5>
                    <h2 className='font-mono text-gray-600 mt-5 tracking-wider'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam cum optio officia sapiente consectetur neque illum sed, ipsum dolor consequuntur.</h2>
                </div>
                <div>
                    <ArrowUpRight size={80} className='text-gray-800' />
                </div>
            </div >
        </>
    )
}

export default Home_text