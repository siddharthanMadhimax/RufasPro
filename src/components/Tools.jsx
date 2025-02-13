import React from 'react'
import _exports from '../constants'
import {motion} from "framer-motion"

const Tools = () => {
  return (
    <div className='mt-20' id='tools'>
      <h1 className='text-4xl sm:text-5xl font-bold mb-20'>Tools</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 place-items-center'>
        {
          _exports.tools.map((item, index) => (
            <div key={index} className='flex items-center flex-col gap-5' >
             <motion.img
             src={item.image}
             
             animate={{rotate:[0,360]}}
             className='w-[100px] h-[100px] rounded-full'
             transition={{
              duration:10,
              repeat:Infinity,
              ease:"linear"
             }}
              />
              <p>{item.tool}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Tools