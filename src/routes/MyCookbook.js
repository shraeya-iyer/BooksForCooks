import React from 'react'
import Navbar from '../components/Navbar'
import MyCookbookCards from '../components/MyCookbook'
import Heroimage from '../components/Heroimage'
import Form from '../components/EnterYourRecipes'

const MyCookbook = () => {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <div> <Form /></div>
        <MyCookbookCards />
    </div>
  )
}

export default MyCookbook
