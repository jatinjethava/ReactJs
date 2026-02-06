import React from 'react'
import Card_content from './Card_content';

const Home_card = (props) => {

    return (
        <>
            <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
                <img src={props.image} alt="home page image" className='h-full w-full object-cover' />
                <Card_content id={props.id} name={props.user} />
            </div>
        </>
    )
}

export default Home_card