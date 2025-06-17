import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <BlogList/>
        <NewsLetter/>
    </div>
  )
}

export default Home