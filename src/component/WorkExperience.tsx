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
    

    className='h-screen   flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center '>
       <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

       <div className="w-full   flex space-x-5 overflow-x-scroll p-10 snap-x snap snap-mandatory  ">
        {/* ExperienceCard */}
        <div className='w-[80vw] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center   md:p-44 h-screen overflow-hidden '> <ExpCard/></div>
        <div className='w-[80vw]  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen"'> <ExpCard1/></div>
       
       
       
       
       </div>
        </motion.div>
  )
}

export default WorkExperience