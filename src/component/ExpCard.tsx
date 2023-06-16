import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import ReactImage from '../images/React.png'
import FireBase from '../images/FireBase.png'
import BlueRed from '../images/bluered-logo.png'
type Props = {}

const ExpCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden
    " >
<motion.img 
initial={{
    y:-100,
    opacity:0,
}}
transition={{duration:1.2}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="w-20 h-20 rounded-full xl:w-[100px] xl:h[100px] object-cover object-center " 
src={BlueRed.src}
/> 
<div className="px-0 md:px-10">
    <h4 className='text-2xl font-light'>REACT NATIVE DEVELOPER</h4>
     <p className="font-bold text-1xl-mt-2 mt-3 ml-2 item-center ">BlueRed Production - [September 2022 -November 2022]</p>  
    
     <div className='flex space-x-2 my-2'>

     <Image className='h-10 w-10 rounded-full' alt="a"  src={ReactImage}/>  

     <Image className='h- bg-transparent w-10 rounded-full' alt="a" src={FireBase} />  

   

     {/* Tech used */}
      {/* Tech used */}
       {/* Tech used */}
       </div>
</div>

<ul className="list-disc space-y-4 ml-5 text-lg" >
    <li>Implemented a Login System using React Native and integrated it with Firebase Authentication</li>
    <li>Utilized State management and Firebase to create the Login System and Main dashboard</li>
    <li>Additionally, incorporated a Dashboard feature into their website using React JS</li>
   
</ul>
    </article>
  )
}

export default ExpCard