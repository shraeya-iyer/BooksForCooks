import React from 'react'
import Navbar from '../components/Navbar'
import MyLikedCards from '../components/MyLiked'
import Heroimage from '../components/HeroImageLiked'

const MyCookbook = () => {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <MyLikedCards />
    </div>
  )
}

export default MyCookbook
