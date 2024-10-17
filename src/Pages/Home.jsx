import React from 'react'
import Hero from '../Components/Hero';
import { Accomplishes } from '../Components/Accomplishes';
import { Objectives } from '../Components/Objectives';
import { Programs } from '../Components/Programs';
import  Poster  from '../Components/Poster';
import { OurTeam } from '../Components/OurTeam';
import { Footer } from '../Components/Footer';
const Home = () => {
  return (
    <>
      <Hero></Hero> 
      <Objectives></Objectives>
      <Accomplishes></Accomplishes>
      <Poster></Poster>
      <Programs></Programs>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </>
  )
}

export default Home;