import React from 'react'
import './card.css'
// import styles from '../../CSS/button.module.css';
import { Bookmark } from 'lucide-react';

export const Card = (props) => {

    const name = "Jatin Jethava"
    // console.log(props.user);

    return (
        <>
            {/* <div className="card">
                <div className="card_image">
                    <img src={props.image} alt="" />
                </div>
                <h1>{props.user}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, necessitatibus?</p>
                <div className="show_btn">
                    <button className='show_profile_btn'>Show Profile</button>
                </div>
            </div> */}

            <div className="con">
                <div className="card2">
                    <div className="top">
                        <div>
                            <img src={props.image} alt="Company Logo" />
                        </div>
                        <div className='save_btn'>
                            <Bookmark size={20} />
                            <a className='card_btn'> save </a>
                        </div>
                    </div>
                    <div className="center">
                        <h3>{props.name} <span>{props.time}</span></h3>
                        <h2>{props.title}</h2>
                        <div className='center_btn'>
                            <h4 className='center_tage'>{props.type1}</h4>
                            <h4 className='center_tage'>{props.type2}</h4>
                        </div>
                    </div>
                    <div className="bottom_part">
                        <div className='part1'>
                            {props.salary}
                            <p>{props.description}</p>
                        </div>
                        <div>
                            <button className='bottom_btn'>Apply Now</button>
                        </div>
                    </div>
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
