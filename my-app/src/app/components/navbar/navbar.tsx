"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';   
import './navbar.css'

import useIsMobile from '../../hooks/Mobile';

// import icons here 
import { LuMail } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const navbar = () => {

	const[isNavOpen, setIsNavOpen] = useState(false);


	const handleScroll = (id : string) => {
		const element = document.getElementsByClassName(id)[0] as HTMLElement;
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
    };

	
	const { width } = useIsMobile();
	const isMobile = width < 768;
  
  return (
		<div className="NavComponent">
			<div className={`NavComponent-in ${isMobile ? 'NavComponent-in-hide' : ''}`}>
				
				<div className="Navbar-one">
					<div className="Navbar-one-in">
						<LuMail className='mail-icon' />
					    <a href="mailto:saitadikonda.cse@gmail.com">saitadikonda.cse@gmail.com</a>
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

			<div className={`NavComponent-mobile-in ${isMobile ? '' : 'NavComponent-mobile-in-hide'}`}>
				<div className="Nav-mobile-one">
					<div className="Nav-mobile-one-in">
						<LuMail className='mail-icon' />
					    <a href="mailto:saitadikonda.cse@gmail.com">saitadikonda.cse@gmail.com</a>
					</div>
				</div>
				<div className="Nav-mobile-two">
					<div className="Nav-mobile-two-in">
						<div className="Nav-icon">
							{isNavOpen ? <IoCloseSharp onClick={() => setIsNavOpen(!isNavOpen)} className='nav-icon' /> : <FaBars onClick={() => setIsNavOpen(!isNavOpen)} className='nav-icon' />}
						</div>
					</div>
				</div>
				<div className={`Nav-links ${isNavOpen ? '' : 'Nav-links-hide'}`}>
					<Link href='/' onClick={() => handleScroll("HomeNav")}> Home </Link>
					<Link href='/' onClick={() => handleScroll("Home-two")}> About me </Link>
					<Link href='/' onClick={() => handleScroll("Home-three")}> Skills </Link>
					<Link href='/' onClick={() => handleScroll("Home-four")}> Projects </Link>
					<Link href='/blogs'> Blogs </Link>
				</div>
			</div>
		</div>
  )
}

export default navbar