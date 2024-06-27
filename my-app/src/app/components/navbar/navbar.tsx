import React from 'react'
import Link from 'next/link';   
import './navbar.css'

// import icons here 
import { LuMail } from "react-icons/lu";

const navbar = () => {
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
						<Link href='/'> Home </Link>
						<Link href='/'> About me </Link>
						<Link href='/'> Skills </Link>
						<Link href='/'> Projects </Link>
						<Link href='/'> Blogs </Link>
					</div>
				</div>

			</div>
		</div>
  )
}

export default navbar