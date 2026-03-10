import React, { useState, useMemo } from "react";

function UseMemo() {
    const [count, setCount] = useState(0);

    const square = useMemo(() => {
        console.log("Calculation running");
        return count * count;
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Square: {square}</h2>
            <button onClick={() => setCount(count + 1)} className='px-3 py-2 border border-neutral-900  rounded-lg hover:bg-gray-300 hover:cursor-pointer'>Increase</button>
        </div>
    );
}

export default UseMemo;