import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/HeroImageHome'
import Form from '../components/FormHome'
import MyCookbookCards from '../components/MyCookbook'


const Home = () => {
  return (
    <div>
      <h1>
        <div><Navbar /></div>
        <div><Heroimage /></div>
        <div> <Form /></div>
        <div><MyCookbookCards /></div>
      </h1>
    </div>
  )
}

export default Home
