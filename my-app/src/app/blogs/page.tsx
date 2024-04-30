import React from 'react'
import Image from 'next/image'

import './page.css'
import '../page.css'


// import components here 
import Navbar from '../components/navbar/navbar'


// import images here
import ReactImg from '../assets/React.png'
import JWTImg from '../assets/JWT.png'
import K8SImg from '../assets/K8S.png'
import OpenSource from '../assets/OpenSource.png'


const page = () => {
  return (
        <div className="BlogComponent">
            <div className="BlogComponent-in">
                
                <div className="Blog-Nav">
                    <Navbar />
                </div>

                <div className="HomeWelcome">
                    <p>Hey, I&apos;m Tadikonda Sai Manikanta, welcome to my portfolio!</p>
                    {/* <Link href='/'>Resume</Link> */}
                </div>

                <div className="Blog-one">
                    <div className="Blog-one-in">
                        <h1>Blogs.</h1>    
                    </div>
                </div>

                <div className="Blog-two">
                    <div className="Blog-two-in">
                        <div className="Blog-card blog-card-one">
                            <BlogCard title='React - Docker' des='Dockerizing Your React Application Like a Pro.' img={ReactImg} />
                        </div>
                        <div className="Blog-card blog-card-two">
                            <BlogCard title='JWT Authentication' des='JWT Authentication with node JS and Express.' img={JWTImg} />    
                        </div>
                        <div className="Blog-card blog-card-one">
                            <BlogCard title='Kubernetes (K8s)' des='Deploying a React App on Kubernetes.' img={K8SImg} />
                        </div>
                        <div className="Blog-card blog-card-two">
                            <BlogCard title='OpenSource' des='Introduction to OpenSource.' img={OpenSource} />    
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default page


const BlogCard = (props : any) => {
    return (
        <div className="BlogCardComponent">
            <div className="BC-one">
                <h1>{props.title}</h1>
                <p>{props.des}</p>
            </div>
            <div className="BC-two">
                <div className="Read-button">
                    <button>Read now</button>
                </div>
                <div className="Follow-button">
                    <button className='follow-button'>Follow Me</button>
                </div>
            </div>
            <div className="BC-three">
                <Image
                    src={props.img}
                    alt='React'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}