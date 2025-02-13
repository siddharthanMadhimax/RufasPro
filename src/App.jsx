import React from 'react'
import { About, Education, Hero, NavBar,Tools,Footer, Contact} from './components'

const App = () => {
  return (
    <>
    <NavBar/>
    <div className='sm:px-10 px-5 text-white'>
      <Hero/>
      <About/>
      <Education/>
      <Tools/>
      <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default App