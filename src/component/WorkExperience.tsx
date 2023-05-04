import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'
import ExpCard1 from './ExpCard1'
type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    

    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center '>
       <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

       <div className="w-full   flex space-x-5 overflow-x-scroll p-10 snap-x snap snap-mandatory">
        {/* ExperienceCard */}
       <ExpCard/>
       <ExpCard1/>
       
       
       </div>
        </motion.div>
  )
}

export default WorkExperience