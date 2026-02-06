import React, { useState } from 'react';
import button from '../../../CSS/button.module.css'

const Input = () => {

    const [inputValue, setInputValue] = useState("");

    function Save() {
        alert("Data Saved");
    }

    return (
        <>
            <input
                className='m-5 p-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blcak-500 focus:border-transparent'
                type="text"
                name="input"
                id="input"
                placeholder="Enter your input here"
                onChange={function (item) {
                    console.log(item.target.value);
                }}
            />

            <button className={button.css_btn} onClick={Save}>Save</button>
        </>
    )
}

export default Input