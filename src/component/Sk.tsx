import React from 'react'
import {motion} from 'framer-motion'
//import Skill from './Skill'
import react from '../images/React.png'
import node from '../images/node.png'
import Skillftt from './Skillftt'
import Skillff from './Skillff'
import fire from '../images/FireBase.png'
import nextt from '../images/next.jpeg'
import framer from '../images/framer.jpeg'
import render from '../images/render.png'
import types from '../images/type.png'
import tail from '../images/tail.jpeg'
import mongo from '../images/mogo.png'
import java from '../images/java.png'
import js from '../images/js.jpeg'
import expo from '../images/expo.png'


type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    
    initial={{opacity:0}}
    whileInView={{opacity:1.5}}
    transition={{duration:1.5}}

    className="
    h-screen flex relative flex-col text-center md:text-left
    xl:flex-col w-screen max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-x-auto
    ">
        <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
        </h3>

<h3 className="top-34 mb-12 uppercase tracking-[3px] text-gray-500 text-sa">Hover over a skill for currency profiency</h3>

<div className=' pt-10  grid grid-cols-4 gap-5'>
    <Skillftt img={react.src} per={90}/>
    <Skillftt img={node.src} per={90}/>
    
    <Skillff img={fire.src} per={75}/>
    <Skillff img={nextt.src} per={75}/>
    <Skillftt img={framer.src} per={75}/>
    <Skillftt img={render.src} per={100}/>
    <Skillff img={types.src}  per={90}/>
    <Skillff img={tail.src}   per={80}/>
    <Skillftt img={mongo.src}  per={90}/>
    <Skillftt img={java.src}   per={80}/>
    <Skillff img={js.src}   per={80}/>
    <Skillff img={expo.src}   per={80}/>
    
</div>

        </motion.div>
  )
}

export default Skills