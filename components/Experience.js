import React from 'react'
// import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='abolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl'>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap'>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        </div>
    </div>
  )
}

export default Experience
{/* <motion.div
    initial={{
        opacity: 0
    }} 
    whileinview={{
        opacity:1
    }}
    transition={{
        duration: 1.5
    }} */}