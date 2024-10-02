import React from 'react'
import Hero from '../Components/Hero';
import { Accomplishes } from '../Components/Accomplishes';
import { Objectives } from '../Components/Objectives';
const Home = () => {
  return (
    <>
      <Hero></Hero> 
      <Objectives></Objectives>
      <Accomplishes></Accomplishes>
    </>
  )
}

export default Home