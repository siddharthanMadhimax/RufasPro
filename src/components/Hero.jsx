import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { heroImage } from '../assets';

const Hero = () => {
  const design="designer".split("")
  const [visible, setVisible] = useState(false);
  const containerAnimation={
    hidden:{
      transition:{
        staggerChildren:0.1
      }
    },
    visible:{
      transition:{
        staggerChildren:0.1,
        delayChildren:0.7
      }
    }
  }

  const letterAnimation={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0}
  }



  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden text-white w-full h-[520px] flex items-center justify-center"
    id='home'>
      {/* Background Spline */}
      <div className="hidden sm:block absolute inset-0 w-full h-full z-0">
        <Spline className="w-full h-full" scene="https://prod.spline.design/G9KcrntkCAXPJ9vC/scene.splinecode" />
      </div>

      {/* Content Above Spline */}
      <div className='flex flex-col absolute inset-0 sm:mt-40 z-10'>
        <div>
          <img src={heroImage} className='hidden max-sm:block rounded-lg overflow-hidden mb-10 border-glow'/>
        </div>
      {/* left side */}
      <div className=''>
      <motion.div
      initial={{opacity:0,x:-200}}
      whileInView={{opacity:1,x:0}} transition={{duration:1}}
       className="">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-800">Hi I'm <span className='sm:text-white'>Rufas Stalin</span></h1>
      </motion.div>
      <motion.div variants={containerAnimation}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      >
        <h1 className='text-4xl sm:text-6xl font-bold'>Ux/Ui {design.map((char,index)=>(
          <motion.span
          className='text-pink-600'
           variants={letterAnimation} key={index}
          transition={{duration:0.2}}>
            {char}
          </motion.span>
        ))}</h1>
      </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
