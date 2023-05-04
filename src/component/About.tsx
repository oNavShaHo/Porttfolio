import React from 'react'
import { motion } from "framer-motion"
import nava from '@/images/About.jpg';
type Props = {}


function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
  
    className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl  mb-10">About</h3>  
      
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
      }}
      transition={{
        duration:1.2,
      }}
      whileInView={{ opacity:1 ,x:0}}
      viewport={{once:true}}
      src={nava.src}
      className=" mobile:mt-50  mt-10  -mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
      md:rounded-lg md:w-64 md:h-95  xl:w-[400px] xl:h-[500px]"
      
      />
       <br/>
     <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
             </h4>

             <p className="text-base">
             Hello! I am a frontend developer with expertise in a variety of web development tools, including Next.js, React.js, Framer Motion, and more.

I have a passion for creating dynamic and engaging user interfaces that provide a seamless user experience. I am skilled in developing responsive and scalable web applications that meet the needs of clients across various industries.

My proficiency in Next.js allows me to build fast, server-side rendered web applications with ease. I am also experienced in React.js, a popular JavaScript library that enables the creation of reusable UI components for efficient and consistent development.


             </p>
     </div>

    </motion.div>
  )
}

export default About