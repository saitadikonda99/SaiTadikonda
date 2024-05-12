import React from 'react'
import Link from 'next/link'

import './navbar.css'

// import icons here 
import { IoMailOutline } from "react-icons/io5";

const navbar = () => {
  return (
    <div className="NavbarComponent">
        <div className="NavbarComponent-in">
            <div className="Nav-one">
                <IoMailOutline className='email-icon' />
                <p>saitadikonda.cse@gmail.com</p>
            </div>

            <div className="Nav-two">
                <Link href='/'>Home</Link>
                <Link href='/'>Work</Link>
                <Link href='/'>Projects</Link>
                <Link href='/'>Resume</Link>
                <Link href='/blogs'>Blogs</Link>
            </div>
        </div>
    </div>
  )
}

export default navbar