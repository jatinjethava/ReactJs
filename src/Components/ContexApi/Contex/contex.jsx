import React, { useState, createContext } from 'react'

export const My_Contex = createContext();

const Contex = (props) => {

    const [Data, setData] = useState("blog")
    const [Name, setName] = useState("jatin jethava")

    return (
        <>
            <My_Contex.Provider value={[Data, setData, Name, setName]}>
                <div>{props.children}</div>
            </My_Contex.Provider >
        </>
    )
}

export default Contex