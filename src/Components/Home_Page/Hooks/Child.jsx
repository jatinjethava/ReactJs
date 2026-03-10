import React from 'react'

function Child({ click }) {
    console.log("child rendered.");
    return (
        <>
            <button onClick={click} className='px-3 py-2 border border-neutral-900  rounded-lg hover:bg-gray-300 hover:cursor-pointer'>Child </button>
        </>
    );
}

export default React.memo(Child);