import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './globals.css';
import './page.css';

import { FaArrowDown } from "react-icons/fa";

// import images here 
import SaiImg from './assets/Sai.png';
import Github from './assets/Github.png';
import Linkedin from './assets/LinkedIn.png';
import Twitter from './assets/Twitter.png';
import Telegram from './assets/Telegram.png';
import Instagram from './assets/Instagram.png';

// import components here
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function Home() {
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
                            <p>Tadikonda Sai Manikanta works as a developer relations manager at Civo, where he drives innovation in cloud-native technologies and has educated thousands of developers. Renowned for his empathetic approach and community leadership.</p>
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


            <div className="HomeFooter">
                <Footer />
            </div>

        </div>
    </div>
  );
}
