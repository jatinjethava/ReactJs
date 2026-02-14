import React, { useState, useEffect } from 'react'
import axios from 'axios';
import preCss from '../../../CSS/button.module.css'

const Gallary_Task = () => {

    const [gallary, setGallary] = useState([]);
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [page, setPage] = useState(1);

    const gallary_data = async () => {
        try {
            const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`);
            // console.log(response.data);
            setGallary(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        gallary_data();
    }, [page]);

    const back = () => {
        setPage(page > 1 ? page - 1 : 1);
        // console.log(page);
    }
    const next = () => {
        setPage(page + 1);
        // console.log(page);
    }

    return (
        <>
            <div className='m-2 text-3xl flex justify-center uppercase '>
                <h2 className={`${preCss.underLine} text-3xl uppercase`}>Gallary</h2>
            </div>
            <div className='flex gap-2 flex-wrap justify-center uppercase '>
                <input
                    type="text"
                    placeholder='height...'
                    className='m-2 p-2 border border-neutral-600 rounded focus:outline-stone-500'
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='width...'
                    className='m-2 p-2 border border-neutral-600 rounded focus:outline-stone-500'
                    onChange={(e) => setWidth(e.target.value)}
                />

            </div>
            {height === "" || width === "" ? (
                <h1 className='text-center p-10 h-64 uppercase text-wrap'>🔍 Please enter height and width .!</h1>
            ) : (
                <>
                    <div className='flex gap-2 flex-wrap justify-center'>
                        {gallary.map((item) => {
                            if (item.height < parseInt(height) && item.width < parseInt(width)) {
                                return (
                                    <div key={item.id} className='w-80 border border-neutral-600 m-3 p-2 rounded'>
                                        <a href={item.download_url} target="_blank" rel="noopener noreferrer">
                                            <img src={item.download_url} alt={item.author} className='w-full h-50 object-cover rounded' />
                                        </a>
                                        <div className='flex gap-10 m-2 justify-center items-center'>
                                            <h3 className='text-lg font-semibold mt-2 uppercase'>{item.author}</h3>
                                            <div className='flex mt-2 gap-1 justify-center items-center'>
                                                <p className='text-sm text-gray-600'>{item.height}px</p>
                                                <p className='text-sm text-gray-600'>X</p>
                                                <p className='text-sm text-gray-600'>{item.width}px</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>

                    <div className='flex justify-center items-center gap-5 m-5'>
                        <button className={`${preCss.css_btn} uppercase`}
                            onClick={() => back()}
                            style={{ opacity: page == 1 ? "0.5" : "1" }}
                        > back[{page}]</button>
                        <button className={`${preCss.css_btn} uppercase`}
                            onClick={() => next()}
                        >next [ {page + 1} ]</button>
                    </div>
                </>
            )
            }
        </>
    )
}

export default Gallary_Task