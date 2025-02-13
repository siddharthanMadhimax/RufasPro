import React, { useState } from 'react'
import { Logo } from '../assets'
import {Link} from "react-router-dom"
import _exports from '../constants'
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {
  const [toggle,setToggle]=useState(false)

  const [active,setActive]=useState("")
  const setActiveFunction=(value)=>{
    setActive(value)
  }
  const setToggleFunc=(value)=>{
    setActive(value)
    setToggle((prev)=>!prev)
  }
  return (
    <div className='text-white '>
      <div className='p-5 flex items-center justify-between'>
        {/* left side logo */}
        <div className="sm:w-10 sm:h-10 max-sm:w-8 max-sm:h-8 rounded-full overflow-hidden">
         <Link to="/">
         <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
         </Link>
        </div>
        {/* right side links */}
        <div className=''>
          <ul className='hidden sm:flex gap-10'>
            {_exports.navbar.map((item,index)=>{
              return <li
              key={item.id}
              className={`cursor-pointer ${active==item.label ? "text-white":"text-gray-400"}`}
              onClick={()=>setActiveFunction(item.label)}
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            })}
          </ul>
          <div className='sm:hidden flex'>
          <button onClick={()=>setToggle((prev)=>!prev)}>
            {toggle ? <FaTimes/> :<FaBars/>}
          </button>
          </div>
        </div>
      </div>


      <div className={`${toggle ? "flex" :"hidden"} bg-black  text-white  items-center justify-center
      fixed top-0 left-0 w-full h-full z-50`}>
        <ul className='flex flex-col gap-5'>
          {_exports.navbar.map((item,index)=>(
            <li key={item.id}
            className={`${active==item.label ? "text-white":"text-gray-300"}`}
            onClick={()=>setToggleFunc(item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar