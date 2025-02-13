import React from 'react'
import _exports from '../constants'

const Footer = () => {
  return (
    <div className='mt-20 w-full bg-gray-800 text-blue-600 p-5'>
      <ul className='flex items-center justify-center sm:gap-20 gap-10'>
        {_exports.footer.map((item,index)=>(
          <li key={index}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer