import React, { useContext } from 'react'
import { My_Contex } from './Contex/contex'

const ChangeLogo = () => {

    const [Data, setData, Name, setName] = useContext(My_Contex);

    const changeLogo = () => {
        setName("JATIN JETHAVA");
    }

    return (
        <>
            <button onClick={changeLogo} className='px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400'>Change logo</button>
        </>
    )
}

export default ChangeLogo