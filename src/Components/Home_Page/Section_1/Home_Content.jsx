import React from 'react'
import Home_text from './home_text'
import Home_image from './home_image'

const Home_Content = (props) => {
    return (
        <>
            <div className='py-10 h-[90vh] px-20 flex items-center justify-between gap-10'>
                <Home_text />
                <Home_image user={props.user} />
            </div>
        </>
    )
}

export default Home_Content