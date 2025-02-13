import React from 'react'
import _exports from '../constants'
import {motion} from "framer-motion"
import Tilt from "react-parallax-tilt"

const About = () => {
  return (
    <div className='text-white' id='about'>
      <h1 className='text-4xl sm:text-5xl'>About</h1>
      <div className='flex max-sm:flex-col gap-10 mt-10 p-5 items-center justify-around'>
       {_exports.about.map((item,index)=>(
        <Tilt 
        key={index}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        >
          <motion.div 
        key={index} 
        initial={{opacity:0, x:200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        className=' border-box min-h-[350px]
         p-3 rounded-lg flex flex-col max-w-[300px] items-center gap-5 h-full flex-grow'
      >
        <div>
          <h1 className='text-3xl font-bold text-blue-700 text-center'>{item.title}</h1>
        </div>
        <div className='text-xl'>
          {item.description}
        </div>
      </motion.div>
      
        </Tilt>
       ))}
      </div>
    </div>
  )
}

export default About