import React from 'react'
import Home_card from './home_card'

const Home_image = (props) => {

    return (
        <>
            <div className='h-full w-2/3 p-2 flex overflow-x-auto flex-nowrap gap-5 shrink-0'>
                {
                    props.user.map((item, index) => {
                        return (
                            <Home_card key={index} id={index} image={item.image} user={item.name} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home_image