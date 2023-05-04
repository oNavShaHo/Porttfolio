import React from 'react'
import Case1 from '../images/case1.png'
import Case2 from '../images/BlueRed.png'
import Case3 from '../images/Case3.png'
import Image from 'next/image'
type Props = {}

function Project({}: Props) {
    const projects=["1","2","3"];
  return (
    <div className='h-screen relative fle overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
 
<h3 className=' relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>

    {
        projects.map((project, i)=>(
<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' >
{i==0?(<Image src={Case1} alt="a" />):(<Image src={Case2} alt="a" />)}


<div>
    <h4 className={project}>
        <span>Case Study {i+1} of {projects.length}:</span>QUIZ
    </h4>
</div>
</div>

        ))
    }
</h3>
    </div>
  )
}

export default Project