import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{
            opacity:1.,
            x:0,
        }}
        transition={{
            duration: 1.2,
        }}
        viewport={{
            once: true
        }}
         src='data:image/png;base64,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' className='-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-5' alt=''/>
         <div className='space y-10 px-0 md:px-20'>
         <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB8A]'>little</span> background of my history</h4>
          <p className='text-base '>wGzDKKGqLJ71i1fVOCch7BaQFLADIT9irZjhkhDeFZg2GA6EI0qo</p>
         </div>
    
     </div>
  )
}

export default About

{/* <motion.div initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }} */}