import React, { useState } from 'react'
import custom from '../../../CSS/button.module.css'

const Form_handaling = () => {

    // const form_handaling = (e) => {
    //     e.preventDefault();
    //     try {

    //         if (e.target[0].value === '' || e.target[1].value === '' || e.target[2].value === '') {
    //             throw new Error('All fields are required!');
    //         }
    //         alert('Form submitted successfully!');

    //     } catch (error) {
    //         alert(`${error.message}`);
    //     }
    // }

    const [title, setTitle] = useState("");
    const [Discription, setDiscription] = useState("");
    const [task, setTask] = useState([]);

    const form_handler = (e) => {
        e.preventDefault();
        try {

            if (e.target[0].value === "" || e.target[1].value === "") {
                throw new Error("All Feilds Are Required.");
            }

            const cpyTask = [...task];
            cpyTask.push({ title, Discription });
            setTask(cpyTask);
            setTitle("");
            setDiscription("");

            alert("Form Is Submited.")

        } catch (error) {
            alert(`${error.message}`)
        }
    }

    return (
        <>

            <div className='min-h-screen text-center flex flex-col lg:flex-row justify-center items-start gap-5 p-4'>
                <form className='w-full sm:w-96 p-5 m-3 border-2 border-gray-300 rounded-md flex gap-4 flex-col' onSubmit={form_handler}>
                    <div className='p-5 '>
                        <div className='py-2'>
                            <input
                                type="text"
                                placeholder='Enter Your Name'
                                name='name'
                                value={title}
                                className='mt-5 py-2 w-full border-2 border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <textarea
                                type="email"
                                placeholder='Enter Your Email'
                                name='email'
                                value={Discription}
                                className='mt-2 h-30 w-full flex flex-wrap border-2 border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                onChange={(e) => setDiscription(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <button className={custom.css_btn} type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
                <div className='w-full lg:w-1/2 p-4 md:p-8 flex flex-col shadow-2xl shadow-neutral-200 rounded-lg'>
                    <h1 className='uppercase text-lg md:text-xl font-bold mb-5'>my Notes</h1>
                    <div className='flex gap-5 justify-start items-start flex-wrap rounded-2xl overflow-auto max-h-96'>
                        {
                            task.length > 0 ? (
                                task.map((item, index) => (
                                    <div key={index} className='w-full sm:w-72 min-h-40 p-4 flex flex-col justify-start items-start bg-gray-200 rounded-2xl shadow-2xl shadow-neutral-200'>
                                        <h1 className={custom.underLine + ' text-sm md:text-base'}>{item.title}</h1>
                                        <p className='p-2 text-start text-sm md:text-base overflow-hidden'>{item.Discription}</p>
                                    </div>
                                ))
                            ) : (
                                <p className='text-gray-500 text-center w-full'>No notes yet. Add one to get started!</p>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* <div className='flex justify-center items-center text-center'>

                <form className='p-5 m-5 border-2 border-gray-300 rounded-md w-80' onSubmit={form_handaling}>
                    <h1 className={custom.underLine}>Sign Up Page</h1>
                    <div className='p-5 '>
                        <div className='py-2'>
                            <input
                                type="text"
                                placeholder='Enter Your Name'
                                name='name'
                                className='mt-5 py-1 w-60 border-2 border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="email"
                                placeholder='Enter Your Email'
                                name='email'
                                className='mt-5 py-1 w-60 border-2 border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <input
                                type="number"
                                placeholder='Enter Your Mobile Number'
                                name='mobile_no'
                                className='mt-5 py-1 w-60 border-2 border-gray-400 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
                                onChange={e => setMobile(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <button className={custom.css_btn} type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div> */}
        </>
    )
}

export default Form_handaling