import React from 'react'
import { motion } from "framer-motion"
import quiz1 from '../images/dharma.png'
import blue from '../images/blueredsite.png'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2];
  
  const p: { [key: number]: any } = {
    0: {
      img: quiz1,
      title: "DharmaPlay",
      link: "https://events.dharmaendeavours.com/map/dharma-mela-seo"
    },
    1: {
      img: blue,
      title: "BlueRed",
      link: "https://blueredproduction.com/"
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-full justify evenly mx-auto items-center z-0">
      <h3 className="absolute text-center left-[41vw] top-12 uppercase tracking-[20px] text-gray-500 text-2xl" >
        Projects
      </h3>

      <div className="relative flex overflow-scroll overflow-y-hidden mt-4 snap-x snap-mandatory z-20">
        {projects.map((project, i) => ( 
          <div className="w-full mt-[20vh] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen" key={project}>
            <motion.img 
              initial={{ y: -300 }} 
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={p[project].img}
              alt='yo'
              className='h-[55vh]'
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center" >
                <span className='underline decoration-[#F7AB0A]/50'>{p[project].title}</span>
              </h4>
              <p className="text-lg text-center md:text-left">
                <a className='font-bold text-cyan-600' href={p[project].link}>Click here for live Website</a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects;
