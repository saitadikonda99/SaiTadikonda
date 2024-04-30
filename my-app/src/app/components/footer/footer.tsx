import React from 'react'
import Link from 'next/link'

import './footer.css'

// import icons here 
import { AiTwotoneMail } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { PiInstagramLogoDuotone } from "react-icons/pi";

const footer = () => {
  return (
    <div className="FooterComponent">
        <div className="FooterComponent-in">
            <div className="Footer-one">
                <div className="Footer-one-one">
                    <AiTwotoneMail className='email-icon' />
                    <p>saitadikonda.cse@gmail.com</p>
                </div>
                <div className="Footer-one-two">
                    <SiGithub />
                    <GrLinkedin />
                    <GrTwitter />
                    <FaTelegram />
                    <PiInstagramLogoDuotone />
                </div>
            </div>
            <div className="Footer-two">
                <div className="Footer-two-in">
                    <p>© 2021 Designed & Developed by Tadikonda Sai Manikanta </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default footer