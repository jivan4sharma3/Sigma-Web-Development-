import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="cards">
        <Card title='Card first' des='this is the first card and i learn react with code with harry ' />
        <Card title='Card Second' des='this is the second card and i learn MERN stack  with code with harry ' />
        <Card title='Card third ' des='this is the third card and i learn Full Stack Development  with code with harry ' />
        <Card title='Card fourth' des='this is the fourth card and i learn Sigma developmnet with code with harry ' />
      </div>
      <Footer />
    </div>
  )
}

export default App
