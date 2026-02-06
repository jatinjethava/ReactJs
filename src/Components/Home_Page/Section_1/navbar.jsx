import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='h-15 flex items-center justify-between py-10 px-20 text-dark'>
                <h4 className='text-white bg-gray-800 px-10 py-3 rounded-full uppercase tracking-wider'>Jatin Jethava</h4>
                <ul className='flex items-center gap-10 text-black uppercase tracking-widest text-sm'>
                    <li className='cursor-pointer hover:text-gray-500'>Home</li>
                    <li className='cursor-pointer hover:text-gray-500'>About</li>
                    <li className='cursor-pointer hover:text-gray-500'>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar