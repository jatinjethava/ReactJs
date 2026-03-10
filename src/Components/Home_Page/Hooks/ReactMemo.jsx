import React, { useState } from "react";
import MemoChild from "./MemoChild";

function ReactMemo() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)} className='px-3 py-2 border border-neutral-900  rounded-lg hover:bg-gray-300 hover:cursor-pointer'>
                Increase
            </button>

            <MemoChild name="Jatin" />
        </div>
    );
}

export default ReactMemo;