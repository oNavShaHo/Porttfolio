import React from 'react'
import nav from '../images/nav.png'
import { motion } from "framer-motion"
import ReactImage from '../images/react.jpg'
import FireBase from '../images/FireBase.png'
import BlueRed from '../images/bluered-logo.png'
type Props = {}

const ExpCard1 = (props: Props) => {
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
className="w-20 h-20 rounded-full xl:w-[100px] xl:h[100px] object-cover object-center" 
src={BlueRed.src}
/> 
<div className="px-0 md:px-10">
    <h4 className='text-2xl font-light'>REACT JS DEVELOPER</h4>
     <p className="font-bold text-1xl-mt-2 mt-3 ml-2 item-center ">DIGITAL CODE TECHNOLOGY - [January 2023 -April 2023]</p>  
    
     <div className='flex space-x-2 my-2'>

     <img className='h-10 w-10 rounded-full' src={ReactImage.src}/>  

     <img className='h- bg-transparent w-10 rounded-full' src={FireBase.src}/>  

   

     {/* Tech used */}
      {/* Tech used */}
       {/* Tech used */}
       </div>
</div>

<ul className="list-disc space-y-4 ml-5 text-lg" >
    <li>Created a Quiz(Product) for a startup in Singapore</li>
    <li>Led frontend development and collaborated with UI/UX and backend teams for timely project delivery</li>
    <li>Utilized API's to integrate backend with frontend and converted three websites from Figma to React code</li>
   
</ul>
    </article>
  )
}

export default ExpCard1