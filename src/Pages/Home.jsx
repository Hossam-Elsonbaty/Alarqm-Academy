import React from 'react'
import Hero from '../Components/Hero';
import { Accomplishes } from '../Components/Accomplishes';
import { Objectives } from '../Components/Objectives';
import { Programs } from '../Components/Programs';
const Home = () => {
  return (
    <>
      <Hero></Hero> 
      <Objectives></Objectives>
      <Accomplishes></Accomplishes>
      <Programs></Programs>
    </>
  )
}

export default Home;