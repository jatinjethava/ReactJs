import React, { useState } from 'react'
import axios from 'axios';

const LocalStorage = () => {

    const user = [
        {
            name: "jatin jethava",
            email: "jatin@gmail.com",
            monile_no: "8160082638"
        }
    ];

    // localStorage.setItem('user', JSON.stringify(user));
    // const user_data = JSON.parse(localStorage.getItem('user'));
    // console.log(user_data);
    // localStorage.removeItem('user');
    // localStorage.clear();


    // const data = fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));

    // async function fetchData() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const jsonData = await response.json();
    //     console.log(jsonData);
    // }
    // fetchData();

    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    getData();

    return (
        <>
            {/* <div>localStorage</div> */}
            <div className='m-10 flex justify-center items-center flex-wrap gap-10 '>
                {data.map((item, index) => (
                    <div key={item.id} className='rounded-lg p-2 flex flex-col items-center shadow-lg shadow-neutral-200'>
                        <img src={item.download_url} alt={item.author} className='rounded-lg m-2' width="200" />
                        <div className='flex items-center m-2 border-t-2 border-neutral-300 pt-2'>
                            <p className='p-2 font-bold uppercase'>{item.author}</p>
                            <p className='p-2'>{item.height}</p>
                            <h2>x</h2>
                            <p className='p-2 '>{item.width}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LocalStorage