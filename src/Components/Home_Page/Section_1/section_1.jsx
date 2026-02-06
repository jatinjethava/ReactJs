import React from 'react'
import Navbar from './navbar'
import Home_Content from './Home_Content'

const Section_1 = (props) => {

    return (
        <>
            <Navbar />
            <Home_Content user={props.user} />
        </>
    )
}

export default Section_1