import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { My_Contex } from './Contex/contex';
import ChangeLogo from './ChangeLogo';

const Navbar = () => {

    const [Data, setData, Name, setName] = useContext(My_Contex);

    return (
        <>
            <div className='m-2 flex justify-between items-center bg-gray-100 p-2 rounded-lg'>
                <h2 className='px-5 text-2xl'>{Name}</h2>
                <div>
                    <Navbar2></Navbar2>
                </div>
                <ChangeLogo />
            </div>
        </>
    )
}

export default Navbar