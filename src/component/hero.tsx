import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '@/component/BackgroundCircles'
import nav from '@/images/nav.jpg';
import Link from 'next/link';
type Props = {}

export default function Hero({}: Props) {
    const [text,count]=useTypewriter({
        words:["Developer","Designer","Creator"],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden" >
        <BackgroundCircles/>
        
        <img  src={nav.src} className='relative rounded-full h-20 w-20 mx-auto object-cover'  alt="p"/>
       <div className="z-20">
        <h2 className="text-sm-uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1>
         <span className="text-5xl lg:text-6xl fon-semibold scroll-px-10">{text}</span>
       <Cursor cursorColor='#f7AB0A'/>
        </h1>
        <div className="pt-5">
            <Link href="#about">
            <button className="heroButton">About</button>
            </Link>

            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
        </div>
        </div>
    
    </div>
  )
}