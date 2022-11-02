// import logo from './logo.svg';
import React from 'react'
import './App.css'
import Filter from './filter/Filter'
import Footer from './fotter/footer'
import Navbar from './Navbar/navbar'
import Trending from './TrendingPost/Trending'

function App() {
  return (
    <div>
      <Navbar />
      <Trending />
      <Filter />
      <Footer />
    </div>
  )
}

export default App
