import React, { useContext } from 'react'
import { My_Contex } from './Contex/contex'

const Navbar2 = () => {

    const [Data, setData, Name, setName] = useContext(My_Contex);

    return (
        <>
            <div className='flex justify-center items-center'>
                <ul className='flex justify-between items-center px-5 py-2'>
                    <li className='px-5'>home</li>
                    <li className='px-5'>about</li>
                    <li className='px-5'>contact</li>
                    <li className='px-5'>{Data}</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar2