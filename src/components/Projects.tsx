import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
    img: "/01.png",
    tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
    img: "/02.png", 
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
},
{
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
    img: "/03.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
},
{
    id: 3,
    title: "Currency Converter Project",
    desc: "A simple HTML and TypeScript powered tool for converting currencies with real-time rates.",
    img: "/04.png",
    tags: ["HTML", "Node", "CSS", "Tpescript"],
},
{
    id: 4,
    title: "static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/05.png",
    tags: ["HTML", "Node", "CSS", "Tpescript"],
},
{
id: 5,
title: "Simple Falculator Project",
desc: "A basic HTML CSS and TypeScript calculator.",
img: "/06.png",
tags: ["HTML", "Node", "CSS", "Tpescript"],
},
];

const Projects = () => {
  return (
    <div id='projects' className="container pt-8" >
      <Heading title='My Porjects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {data.map((el) => (<Card
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    />) )}
      </div>
    </div>
  )
}

export default Projects
