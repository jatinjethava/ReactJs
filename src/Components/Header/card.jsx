import React from 'react'
import './card.css'

export const Card = (props) => {

    const name = "Jatin Jethava"
    // console.log(props.user);

    return (
        <>
            <div className="card">
                <div className="card_image">
                    <img src={props.image} alt="" />
                </div>
                <h1>Hellow , i am {props.user}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                <div className="show_btn">
                    <button className='show_profile_btn'>Show Profile</button>
                </div>
            </div>

            {/* <div className="container">
                <div className="cards">
                    <div className="card">
                        <div className="card_image">
                            <img src="eliphant.jpg" alt="" />
                        </div>
                        <h1>Hellow , i am {props.user}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                        <div className="show_btn">
                            <button className='show_profile_btn'>Show Profile</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_image">
                            <img src="building.jpg" alt="" />
                        </div>
                        <h1>Hellow , i am {name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                        <div className="show_btn">
                            <button className='show_profile_btn'>Show Profile</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_image">
                            <img src="banana.avif" alt="" />
                        </div>
                        <h1>Hellow , i am {name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                        <div className="show_btn">
                            <button className='show_profile_btn'>Show Profile</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_image">
                            <img src="wall.avif" alt="" />
                        </div>
                        <h1>Hellow , i am {name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                        <div className="show_btn">
                            <button className='show_profile_btn'>Show Profile</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_image">
                            <img src="eliphant.jpg" alt="" />
                        </div>
                        <h1>Hellow , i am {name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                        <div className="show_btn">
                            <button className='show_profile_btn'>Show Profile</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_image">
                            <img src="arcade.avif" alt="" />
                        </div>
                        <h1>Hellow , i am {name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                        <div className="show_btn">
                            <button className='show_profile_btn'>Show Profile</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
