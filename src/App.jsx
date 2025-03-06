import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Context from './Components/Context'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Context />
      <Footer />
    </div>
  )
}

export default App
