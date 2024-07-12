"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './page.css';

// import components here
import Navbar from './components/navbar/navbar';
import Terminal from './UI/terminal/Terminal';
import Footer from './components/footer/footer';
import Card from './UI/cards/Card';
import Skills from './UI/skills/Skill';

// import icons here
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";

// import styles here



export default function Home() {
    const [activeSection, setActiveSection] = useState('home');

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        const sections = [homeRef.current, aboutRef.current, skillsRef.current, projectsRef.current];

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const handleScroll = (id : string) => {
        const element = document.getElementsByClassName(id)[0];
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="HomeComponent">
            <div className="Home-navigator">
                <div className={`Home-navigators ${activeSection === 'home' ? 'active-nav' : ''}`} onClick={() => handleScroll("HomeNav")}></div>
                <div className={`Home-navigators ${activeSection === 'about' ? 'active-nav' : ''}`} onClick={() => handleScroll("Home-two")}></div>
                <div className={`Home-navigators ${activeSection === 'skills' ? 'active-nav' : ''}`} onClick={() => handleScroll("Home-three")}></div>
                <div className={`Home-navigators ${activeSection === 'projects' ? 'active-nav' : ''}`} onClick={() => handleScroll("Home-four")}></div>
            </div>

            <div className="HomeComponent-in">
                <div className="HomeNav">
                    <Navbar />
                </div>

                {/* ------- Home one ------- */}

                <div id="home" className="Home-one" ref={homeRef}>
                    <div className="Home-one-in">
                        <div className="Home-one-content-one">
                            <div className="Home-one-content-one-in">
                                <div className="Home-oco-in-one">
                                    <h1>Hello, I&apos;m Tadikonda Sai Manikanta</h1>
                                </div>
                                <div className="Home-oco-in-two">
                                    <p>Tadikonda Sai Manikanta is a Full stack Developer and DevOps Engineer, where he drives innovation in cloud technologies and currently third year CS. undergrad.</p>
                                </div>
                                <div className="Home-oco-in-three">
                                    <div className="Home-oco-in-three-in">
                                        <Link href='/' >Know more <FaArrowDown/> </Link>
                                        <Link href='https://drive.google.com/file/d/1xmGNraGIXp8ozCEZii9T6mzuJZPEVcjY/view' target='_blank' >Resume <IoDocumentTextOutline/> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Home-one-content-two">
                            <div className="Home-one-content-two-in">
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------- Home two ------- */}

                <div id="about" className="Home-two" ref={aboutRef}>
                    <div className="Home-two-in">
                        <div className="Home-two-one">
                            <h1>Terminal.<span>The best way to know about me.</span></h1>
                        </div>
                        <div className="Home-two-two">
                            <Terminal />
                        </div>
                    </div>
                </div>


                <div id="skills" className="Home-three" ref={skillsRef}>
                    <div className="Home-three-in">
                        <div className="Home-three-one">
                            <div className="Home-three-one-one">
                                <h1>Skills.<span>Transforming Concepts into Reality.</span></h1>
                            </div>
                        </div>
                        <div className="Home-three-two">
                            <Skills />
                        </div>
                    </div>
                </div>

                <div id="projects" className="Home-four" ref={projectsRef}>
                    <div className="Home-four-in">
                        <div className="Home-four-one">
                            <h1>Projects.<span>Take a look at my work, right now.</span></h1>
                        </div>
                        <div className="Home-four-two">
                            <Card />    
                        </div>
                    </div>
                </div>



                <div className="Footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
