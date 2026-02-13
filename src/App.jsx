import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card/card'
import Section_1 from './Components/Home_Page/Section_1/section_1'
import Section_2 from './Components/Home_Page/Hooks/section_2'
import LocalStorage from './Components/localStorage/localStorage'

function App() {

  const Card_data = [
    {
      image: "amazon-logo.jpg",
      name: "Amazon",
      time: "5 day ago",
      title: "Web Designer",
      type1: "part time",
      type2: "senior level",
      salary: "$1200 - $1500",
      description: "Lorem, ipsum."
    },
    {
      image: "google-logo.jpg",
      name: "Google",
      time: "2 day ago",
      title: "UI / XI Designer",
      type1: "full time",
      type2: "junior level",
      salary: "$1500 - $2000",
      description: "Lorem, ipsum."
    },
    {
      image: "Microsoft-Logo.png",
      name: "Microsoft",
      time: "1 day ago",
      title: "UI / XI Designer",
      type1: "part time",
      type2: "senior level",
      salary: "$1200 - $1500",
      description: "Lorem, ipsum."
    },
    {
      image: "app-logo.png",
      name: "Meta",
      time: "3 day ago",
      title: "App Developer",
      type1: "full time",
      type2: "senior level",
      salary: "$1800 - $2200",
      description: "Lorem, ipsum."
    },
    {
      image: "netflix-logo.webp",
      name: "Netflix",
      time: "4 day ago",
      title: "Web Developer",
      type1: "part time",
      type2: "junior level",
      salary: "$1000 - $1300",
      description: "Lorem, ipsum."
    },
    {
      image: "logo-spotify.png",
      name: "Spotify",
      time: "2 day ago",
      title: "Graphic Designer",
      type1: "full time",
      type2: "senior level",
      salary: "$1400 - $1700",
      description: "Lorem, ipsum."
    }
  ]

  Card_data.forEach((item) => {
    // console.log(item);
  })

  const Users = [
    {
      name: "Jatin Jethava",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      image: "water_fall.jpg"
    },
    {
      name: "Yasdip Jetahava",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      image: "tree.jpg"
    },
    {
      name: "Kalpesh jethava",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      image: "moutain_town1.jpg"
    },
    // {
    //   name: "chetan Jethava",
    //   intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    //   image: "john_wick.png"
    // },
    // {
    //   name: "ajay Jethava",
    //   intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
    //   image: "miracle.jpg"
    // }
  ];

  return (
    <>

      {/* <LocalStorage /> */}

      {/* <Section_1 user={Users} /> */}
      <Section_2 />

      {/* <div className='container'>
        <Card user={"Suzume"} image={"suzume.jpg"} />
        <Card user={"Banana"} image={"banana.avif"} />
        <Card user={"US Wall"} image={"wall.avif"} />
        <Card user={"Arcade"} image={"arcade.avif"} />
        <Card user={"Building"} image={"building.jpg"} />
      </div> */}

      {/* <div className='container'>
        {Card_data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            time={item.time}
            title={item.title}
            type1={item.type1}
            type2={item.type2}
            salary={item.salary}
            description={item.description}
          />
        ))}
      </div> */}
    </>
  )
}

export default App
