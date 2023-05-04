import Head from 'next/head'
import Header from '@/component/header'
import Hero from '@/component/hero'
import About from '@/component/About'
import WorkExperience from '@/component/WorkExperience'
import Skills from '@/component/Skills'
import Project from '@/component/Project'
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      <Skills/>
    </section>

    <section id="projects" className="snap-start">
      <Project/>
    </section>
    </div>
  )
}
