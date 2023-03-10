import React from 'react'
import { motion } from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border border-red-500 rounded-full w-[200px] h-[200px] mt-52 animate-ping'/>
        <div className='border border-red-500 rounded-full w-[300px] h-[300px] absolute mt-52 animate-ping'/>
        <div className='border border-red-500 rounded-full w-[500px] h-[500px] absolute mt-52 animate-ping'/>
        <div className='border border-red-500 rounded-full w-[650px] h-[650px] opacity-20 absolute mt-52 animate-pulse'/>
        <div className='border border-red-500 rounded-full w-[800px] h-[800px] opacity-20 absolute mt-52'/>
    </div>
  )
}

export default BackgroundCircles;
{/* <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        border-radius: ["20%", "20%", "50%", "80%", "20%"]

    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-red-500 rounded-full w-[200px] h-[200px] mt-52 animate-ping'/>
        <div className='border border-red-500 rounded-full w-[300px] h-[300px] absolute mt-52 animate-ping'/>
        <div className='border border-red-500 rounded-full w-[500px] h-[500px] absolute mt-52 animate-ping'/>
        <div className='border border-red-500 rounded-full w-[650px] h-[650px] opacity-20 absolute mt-52 animate-pulse'/>
        <div className='border border-red-500 rounded-full w-[800px] h-[800px] opacity-20 absolute mt-52'/>
    </motion.div> */}