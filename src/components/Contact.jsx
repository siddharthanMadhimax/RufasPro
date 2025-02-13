import React from 'react'
import Spline from '@splinetool/react-spline'

const Contact = () => {
    return (
        <div className='mt-20' id='contact'>
            <h1 className='text-4xl sm:6xl font-bold mb-5'>Contact</h1>
            <div className='flex items-center justify-around'>
                {/* left side */}
                <div className='sm:min-w-[400px]'>
                <form className="flex flex-col gap-4">
                    <label className="text-lg font-semibold text-white">Name</label>
                    <input type="text" className="border border-white p-2 rounded-md bg-transparent text-white placeholder-white focus:outline-none" placeholder="Enter your name" />
                    
                    <label className="text-lg font-semibold text-white">Email</label>
                    <input type="email" className="border border-white p-2 rounded-md bg-transparent text-white placeholder-white focus:outline-none" placeholder="Enter your email" />
                    
                    <label className="text-lg font-semibold text-white">Message</label>
                    <textarea className="border border-white p-2 rounded-md bg-transparent text-white placeholder-white focus:outline-none" placeholder="Enter your message"></textarea>

                    <button className="bg-blue-600 text-white py-2 rounded-md">Send</button>
                </form>
                </div>
                {/* right side */}
                <div className='max-sm:hidden w-[400px] h-[400px] relative'>
                    <div className='absolute w-[150px] h-[36px] bottom-5 right-5 bg-black rounded-lg'></div>
                    <Spline
                        scene="https://prod.spline.design/xbpzDFcX2ZCLyf5V/scene.splinecode"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact