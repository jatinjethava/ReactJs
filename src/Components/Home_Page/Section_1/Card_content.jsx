import React from 'react'
import { ArrowRightFromLine } from 'lucide-react';

const Card_content = (props) => {

    function show() {
        alert(`You clicked on ${props.name}'s card!`);
    }

    const mouseEnter = () => {
        alert(`You hovered on ${props.name}'s card!`);
    }

    return (
        <>
            <div className='absolute top-0 left-0 text-white p-5 font-bold h-full w-full flex flex-col items-start justify-between'>
                <h2 className='text-2xl bg-white h-12 w-12 rounded-full text-black flex justify-center items-center'>{props.id + 1}</h2>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl uppercase'>{props.name}</h2>
                    <p className='text-1xl leading-normal tracking-wide font-medium mt-1 text-shadow-2xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia.</p>
                    <div className='flex gap-4 justify-between mt-1'>
                        <button className='bg-white text-black px-5 py-2 rounded-2xl transition duration-750 ease-in-ou cursor-pointer w-30' onClick={show}>Show </button>
                        <button className='bg-white text-black px-5 py-2 rounded-2xl transition duration-750 ease-in-ou cursor-pointer' onMouseEnter={mouseEnter}><ArrowRightFromLine size={20} /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card_content