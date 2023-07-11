import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './libs/Header/Header'
import Content from './libs/Content/Content'
import Footer from './libs/Footer/Footer'

function App() {

  return (
    <div className='container'>
      <Header title={"SRA - Ostad"} />
      <Content />
      <Footer />
    </div>
  )
}

export default App
