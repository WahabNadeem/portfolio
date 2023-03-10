import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Wahab Portfolio</title>
      </Head>
      {/* Header done */ }
      <Header/>

      {/* Hero Done */}
      <section id="hero" className='snap-center'>
      <Hero/>
      </section>

      {/* About*/}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
      <Experience/>
      </section>
      
      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills/>
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
      <Projects/>
      </section>
      {/* Contact Me */}
      <section id='contactme' className='snap-center'>
      <Contact/>
      </section>
    </div>
  )
}
