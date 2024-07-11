import React from 'react'

const Card = () => {
  return (
        <div className="CardComponent">
            <div className="CardComponent-in">
                <CardComponent title={"Cloud IDE"} link={"https://github.com/saitadikonda99/Online-IDE"}  techStack={["react", "Node.js"]}/>
            </div>
        </div>
  )
}

export default Card


const CardComponent = ({props} : any) => {
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
                        <h1>Technologies Used</h1>
                        <div className="tech-stack">
                            {props.techStack.map((tech : string) => (
                                <p>{tech}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="card-three">
                    <div className="card-three-in">
                        <a href={props.link}>Github</a>
                    </div>
                </div>
                <div className="card-four">
                    <div className="card-four">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}