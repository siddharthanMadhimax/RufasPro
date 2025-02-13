


import React from 'react'
import {motion} from "framer-motion"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import _exports from '../constants';


const EducationCard=({education})=>{
  return (
    <VerticalTimelineElement
    contentStyle={{backgroundColor:"#1d1836",color:"#fff",borderRadius:"10px"}}
    contentArrowStyle={{borderRight: '7px solid #fff'}}
    iconStyle={{background:"#4A90E2"}}
    date={education.year}
    >
      <div>
      <h3 className="text-white text-xl font-bold">{education.class}</h3>
      <p>{education.grade}</p>

      </div>
      <p>{education.description}</p>
    </VerticalTimelineElement>
  )
}

const Education = () => {
  return (
    <div className='text-white mt-40 overflow-hidden' id='education'>
      <h1 className='text-4xl sm:text-5xl text-center font-bold mt-8 mb-20'>Education</h1>
      <div>
       <VerticalTimeline>
       {
          _exports.education.map((item,index)=>(
            <EducationCard education={item} key={index}/>
          ))
        }
       </VerticalTimeline>
      </div>
    </div>
  )
}

export default Education