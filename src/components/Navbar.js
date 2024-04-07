import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



  return (
    <div className='header'>
      <Link to='/'>
        <h1>BOOKS FOR COOKS</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'>Feed</Link>
        </li>
        <li>
            <Link to='/myCookbook'>My Cookbook</Link>
        </li>
        <li>
            <Link to='/myLiked'>My Liked</Link>
        </li>
        <li>
            <Link to='/acctSettings'>Account</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#000'}}/>) : (<FaBars size={20} style={{color: '#000'}} />)}   
      </div>
    </div>
  )
}

export default Navbar
