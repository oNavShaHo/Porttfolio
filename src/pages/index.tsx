import Head from 'next/head'
import Header from '@/component/header'
import Hero from '@/component/hero'
import About from '@/component/About'
import WorkExperience from '@/component/WorkExperience'
import Skills from '@/component/Skills'
 import Project from '@/component/Project'
import Contact from '@/component/ContactMe'
import Sk from '@/component/Sk'
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Nav Portfolio</title>

    
      </Head>
    <Header/>
    {/* Hero */}
    <section id="hero" className="snap-start">
     <Hero/>
    </section>
    {/* About */}

    <section id="about" className="snap-center">
      <About />
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
    <WorkExperience/>
    </section>
    {/* Skills */}

    <section id="skills" className='snap-start'>
      <div className='hidden
       lg:block mg:block xl:block  ' ><Skills/></div>
        <div className='
       sm:block lg:hidden' ><Sk/></div>
      
      
    </section>

    <section id="projects" className="snap-start">
      <Project/>
    </section>

    <section id='contact' className='snap-start'>
      <Contact/>
    </section>

    </div>
  )
}
