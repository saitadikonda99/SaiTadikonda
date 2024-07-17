import React from 'react'
import Image from 'next/image';

import './Card.css';

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";

import K8s from '../../assets/K8S.png'
import ReactImg from '../../assets/React.png'

const Card = () => {
  return (
        <div className="CardComponent">
            <div className="CardComponent-in">
                <div className="HiddenCard"></div>
                
                    <CardComponent title={"Cloud IDE"} link={"https://github.com/saitadikonda99/Online-IDE"}  techStack={["react", "node.js"]} image={K8s}/>
                    <CardComponent title={"Cloud IDE"} link={"https://github.com/saitadikonda99/Online-IDE"}  techStack={["next.js", "Node.js"]} image={ReactImg}/>
                    <CardComponent title={"Cloud IDE"} link={"https://github.com/saitadikonda99/Online-IDE"}  techStack={["react", "Node.js"]} image={ReactImg}/>
                    <CardComponent title={"Cloud IDE"} link={"https://github.com/saitadikonda99/Online-IDE"}  techStack={["react", "mysql"]} image={ReactImg}/>

                <div className="HiddenCard"></div> 

            </div>
        </div>
  )
}

export default Card


const CardComponent = (props : any) => {
    return (
        <div className="card">
            <div className="card-in">
                <div className="card-one">
                    <div className="card-one-in">
                        <h1>{props.title}</h1>
                    </div>
                </div>
                <div className="card-two">
                    <div className="card-two-in">
                        <p>Technologies Used: </p>
                        <div className="tech-stack">
                            {props.techStack.map((tech : string) => (
                                <div className="tech-stack-item" key={tech} >
                                    {tech === "react" && <FaReact className='project-icon-react' />}
                                    {tech === "next.js" && <TbBrandNextjs className='project-icon-next' />}
                                    {tech === "node.js" && <DiNodejs className='project-icon-node' />}
                                    {tech === "mysql" && <SiMysql className='project-icon-mysql' />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-three">
                    <div className="card-three-in">
                        <p>Source Code:</p> <a href={props.link}> Github</a>
                    </div>
                </div>
                <div className="card-four">
                    <div className="card-four-in">
                        <Image
                            src={props.image}
                            alt={props.title}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}