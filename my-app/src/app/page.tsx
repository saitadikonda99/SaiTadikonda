import React from 'react';
import Image from 'next/image';
import Link from 'next/link';   
import { useState, useRef } from 'react';

import './globals.css';
import './page.css';

import { FaArrowDown } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

// import images here 
import SaiImg from './assets/Sai.png';
import Github from './assets/Github.png';
import Linkedin from './assets/LinkedIn.png';
import Twitter from './assets/Twitter.png';
import Telegram from './assets/Telegram.png';
import Instagram from './assets/Instagram.png';
import GalleryOne from './assets/Gallery/GalleryOne.png';
import GalleryTwo from './assets/Gallery/GalleryTwo.png';
import GalleryThree from './assets/Gallery/GalleryThree.png';
import GalleryFour from './assets/Gallery/GalleryFour.png';


// import components here
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function Home() {



    // const handleScroll = (scrollOffset: number) => {
    //     const container = document.querySelector('.HomeProject-two');
    //     if (container) {
    //         const currentScrollLeft = container.scrollLeft;
    //         const targetScrollLeft = currentScrollLeft + scrollOffset;
    
    //         container.scrollTo({
    //             left: targetScrollLeft,
    //             behavior: 'smooth'
    //         });
    //     }
    // }


  return (
    <div className="HomeComponent">
        <div className="HomeComponent-in">

            <div className="HomeNav">
                <Navbar />
            </div>

            <div className="HomeWelcome">
                <p>Hey, I&apos;m Tadikonda Sai Manikanta, welcome to my portfolio!</p>
                {/* <Link href='/'>Resume</Link> */}
            </div>
            
            <div className="Home-one">
                <div className="Home-one-in">
                    <div className="Home-one-in-one">
                        <div className="Home-one-in-one-one">
                            <h1>
                                <span>Tadikonda. </span>
                                Devops Engineer | Full Stack Developer, who loves to code.
                            </h1>
                        </div>
                        <div className="Home-one-in-one-two">
                            <p>Tadikonda Sai Manikanta works as a developer relations manager at , where he drives innovation in cloud-native technologies and has educated thousands of developers. Renowned for his empathetic approach and community leadership.</p>
                        </div>
                        <div className="Home-one-in-one-three">

                            <div className="HomeKnowMore">
                                <Link href='/'>
                                    Know More <FaArrowDown />   
                                </Link>
                            </div>

                            <div className="HomeDock">
                                <Image 
                                    src={Github}
                                    alt='Github'
                                    width={40}
                                    height={40}
                                />
                                <Image 
                                    src={Linkedin}
                                    alt='Linkedin'
                                    width={40}
                                    height={40}
                                />
                                <Image 
                                    src={Twitter}
                                    alt='Twitter'
                                    width={40}
                                    height={40}
                                />
                                <Image 
                                    src={Instagram}
                                    alt='Instagram'
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Home-one-in-two">

                    </div>
                </div>
            </div>


            <div className="Home-two">
                
            </div>


            <div className="HomeProjects">
                <div className="HomeProjects-in">
                    <div className="HomeProject-one">
                        <h1>Project / Work I Did</h1>
                    </div>
                    <div className="HomeProject-two">
                        <div className="Project-front"></div>

                        <div className="ProjectBox">
                            
                            <div className="ProBox-one">
                            <video
                                preload='auto'
                                autoPlay
                                loop
                                style={{ width: "100%" }}
                                src="https://firebasestorage.googleapis.com/v0/b/saitadikonda-2d971.appspot.com/o/SAC.mp4?alt=media&token=48a2ac62-a59c-4dd5-9df5-395b3362f0d3"
                            />
                            </div>

                            <div className="ProBox-four">
                                <IoLogoGithub />
                                <FiExternalLink />
                            </div>

                        </div>
                        <div className="ProjectBox">

                        </div>
                        <div className="ProjectBox">

                        </div>
                        <div className="ProjectBox">

                        </div>
                        <div className="ProjectBox">

                        </div>
                        <div className="ProjectBox">

                        </div>
                    
                        <div className="Project-front"></div>
                    </div>
                    {/* <div className="HomeProject-three">
                        <div onClick={() => handleScroll(-1000)}> <FaCircleChevronLeft className='scroll' /> </div>
                        <div onClick={() => handleScroll(1000)}> <FaCircleChevronRight className='scroll' /> </div>
                    </div> */}
                </div>
            </div>

            


            <div className="HomeFooter">
                <Footer />
            </div>

        </div>
    </div>
  );
}
