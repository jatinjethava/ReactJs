import React, { useState, useEffect } from 'react'
import preCss from '../../../CSS/button.module.css'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);


    useEffect(() => {
        console.log('UseEffect Called');
    }, [num])

    const [name, setName] = useState("");

    useEffect(() => {
        if (name !== "") {
            console.log('Name changed:', name);
        }
    }, [name]);

    return (
        <>
            <div className='m-2'>nomber 1 : {num}</div>
            <div className='m-2 flex gap-2 justify-start items-center'>
                <button onClick={() => setNum(num + 1)} className={preCss.css_btn}>+</button>
                <button onClick={() => setNum(num - 1)} className={preCss.css_btn}>-</button>
            </div>
            <div className='m-2'>nomber 2 : {count}</div>
            <div className='m-2 flex gap-2 justify-start items-center'>
                <button onClick={() => setCount(count + 1)} className={preCss.css_btn}>+</button>
                <button onClick={() => setCount(count - 1)} className={preCss.css_btn}>-</button>
            </div>

            <div className='m-2'>
                <input
                    type="text"
                    placeholder="Enter name"
                    className='border border-b-gray-500 p-2 rounded-md'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </>
    )
}

export default UseEffect