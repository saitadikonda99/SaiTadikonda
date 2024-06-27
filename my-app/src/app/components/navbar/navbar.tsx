import React from 'react'
import Link from 'next/link';   
import './navbar.css'

// import icons here 
import { LuMail } from "react-icons/lu";

const navbar = () => {

	const handleScroll = (id : string) => {
        const element = document.getElementsByClassName(id)[0];
        element.scrollIntoView({ behavior: 'smooth' });
    };


  return (
		<div className="NavComponent">
			<div className="NavComponent-in">
				
				<div className="Navbar-one">
					<div className="Navbar-one-in">
						<LuMail className='mail-icon' />
						<p>saitadikonda.cse@gmail.com</p>
					</div>
				</div>

				<div className="Navbar-two">
					<div className="Navbar-two-in">
						<Link href='/' onClick={() => handleScroll("HomeNav")}> Home </Link>
						<Link href='/' onClick={() => handleScroll("Home-two")}> About me </Link>
						<Link href='/' onClick={() => handleScroll("Home-three")}> Skills </Link>
						<Link href='/' onClick={() => handleScroll("Home-four")}> Projects </Link>
						<Link href='/blogs'> Blogs </Link>
					</div>
				</div>

			</div>
		</div>
  )
}

export default navbar