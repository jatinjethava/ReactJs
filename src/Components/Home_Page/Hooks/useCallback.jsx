import React, { useState, useCallback } from 'react'
import Child from './Child';

const UseCallback = () => {

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Memoized function");
        setCount(prev => prev + 1);
    }, []);

    return (
        <>
            <div>
                <h2>{count}</h2>
                <button onClick={increment} className='px-3 py-2 mr-1 border border-neutral-900  rounded-lg hover:bg-gray-300 hover:cursor-pointer'>Increment</button>
                <Child click={increment} />
            </div>
        </>
    )
}

export default UseCallback