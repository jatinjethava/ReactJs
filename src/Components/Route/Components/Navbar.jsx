import React from 'react'
import { Home } from "lucide-react";
import { Link } from 'react-router-dom';
import preCss from '../../../CSS/button.module.css';

const Navbar = () => {
    return (
        <>
            <nav className='mx-10 my-2 flex flex-wrap justify-between items-center text-dark p-2  rounded-lg'>
                <div className='p-2 border-2 border-red-400 rounded-md shadow shadow-red-400'>
                    <Home size={35} color='black' />
                </div>
                <div className='flex flex-wrap gap-2 space-x-5'>
                    <Link to={"/"} className={preCss.redUnderLine}>
                        <a className='hover:text-red-500'>Home</a>
                    </Link>
                    <Link to={"/about"} className={preCss.redUnderLine}>
                        <a className='hover:text-red-500'>About</a>
                    </Link>
                    <Link to={"/product"} className={preCss.redUnderLine}>
                        <a className='hover:text-red-500'>Product</a>
                    </Link>
                    <Link to={"/contact"} className={preCss.redUnderLine}>
                        <a className='hover:text-red-500'>Contact</a>
                    </Link>
                    <Link to={"/service"} className={preCss.redUnderLine}>
                        <a className='hover:text-red-500'>Services</a>
                    </Link>
                </div>
                <div className='flex flex-wrap gap-5 justify-center'>
                    <button className={`${preCss.red_btn} uppercase`}>Log-In</button>
                    <button className={`${preCss.red_btn} uppercase`}>Sign-Up</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar