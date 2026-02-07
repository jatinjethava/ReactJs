import React, { useState } from 'react';
import button from '../../../CSS/button.module.css'

const Usestate = () => {

    const [value, setValue] = useState(0);
    const [step, setStep] = useState(1);
    const Increase = () => {
        setValue(value + step);
        // setValue(value + step);
        // usestate setValue function is asynchronous, so if you want to see the updated value immediately after setting it, you can use a callback function or useEffect hook to log the updated value. Here's an example using a callback function:
        // setValue(prevValue => {
        //     const newValue = prevValue + step;
        //     console.log('Previous value:', prevValue);
        //     console.log('Updated value:', newValue);
        //     return newValue;
        // });
    };
    const Decrease = () => {
        setValue(value - step);
    };

    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleSave = () => {
        alert(`Saved value: ${name}`);
        // do API call / localStorage / anything here
    };

    const [objectValue, setObjectValue] = useState({ name: 'Jatin Jethava', age: '21' });
    const saveData = (e) => {
        console.log(objectValue.name);
        setObjectValue({ ...objectValue, name: e.target.value });
    }

    const [arr, setArr] = useState([1]);
    const addToArray = () => {
        setArr([...arr, arr.length + 1]);
    };

    function batchUpdateExample(e) {
        // setObjectValue(num + 1); 
        // setObjectValue(num + 1); 
        // setObjectValue(num + 1);  // This will not work as expected because the state updates are asynchronous and may not reflect the latest value of num.
        setObjectValue(prev => prev + 1);
        setObjectValue(prev => prev + 1);
        setObjectValue(prev => prev + 1);
    }

    return (
        <>
            <div className='p-5 '>
                <div className='py-2'>
                    <div className='mt-5'>
                        <label htmlFor="" className='p-8 border-2 border-gray-500 rounded-2xl bg-gray-200'>{value}</label>
                    </div>
                    <br />
                    <input
                        type="number"
                        value={step}
                        onChange={(e) => setStep(Number(e.target.value))}
                        className='mt-5 border-2 border-gray-400 rounded-md p-1'
                    />

                </div>
                <div className='flex gap-2'>
                    <button className={button.css_btn} onClick={Increase}>Increase</button>
                    <button className={button.css_btn} onClick={Decrease}>Decrease</button>
                </div>
            </div>

            <div className='p-5'>
                <div className='py-2'>
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        className='border-2 border-gray-400 rounded-md p-1'
                    />
                </div>
                <div className='flex gap-2'>
                    <button className={button.css_btn} onClick={handleSave}>Save</button>
                </div>
            </div>

            <div className='p-5'>
                <div className='py-2'>
                    <input
                        type="text"
                        value={objectValue.name}
                        onChange={(e) =>
                            setObjectValue({ ...objectValue, name: e.target.value })
                        }
                        className='border-2 border-gray-400 rounded-md p-1'
                    />
                </div>

                <div className='flex gap-2'>
                    <button className={button.css_btn} onClick={saveData}>
                        Save
                    </button>
                </div>
            </div>

            <div className='p-5'>
                <div className='py-2'>
                    <button className={button.css_btn} onClick={addToArray}>Add to Array</button>
                </div>
                <div>
                    <ul>
                        {arr.map((item, index) => (
                            <a href="">{item} </a>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Usestate