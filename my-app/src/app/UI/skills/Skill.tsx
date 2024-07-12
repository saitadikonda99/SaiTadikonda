import React from 'react'

import './Skill.css'

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";


const Skills = () => {
  return (
        <div className="SkillComponent">
            <div className="SkillComponent-in">
                <div className="HiddenSkill"></div>

                <SkillComponent tech="react" />
                <SkillComponent tech="next.js" />
                <SkillComponent tech="next.js" />
                <SkillComponent tech="next.js" />
                <SkillComponent tech="next.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="node.js" />
                <SkillComponent tech="next.js" />
                <SkillComponent tech="node.js" />

            </div>
        </div>
  )
}

export default Skills


const SkillComponent = (props : any) => {
    return (
        <div className="Skill">
            <div className="Skill-in">
                <div className="Skill-one">
                    {props.tech === "react" && <FaReact className='skill-icon-react skill-icon' />}
                    {props.tech === "next.js" && <TbBrandNextjs className='skill-icon-next skill-icon' />}
                    {props.tech === "node.js" && <DiNodejs className='skill-icon-node skill-icon' />}
                </div>
                <div className="Skill-two">
                    <p>{props.tech}</p>
                </div>
            </div>
        </div>
    )
}