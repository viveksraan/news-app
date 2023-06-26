import { useState } from 'react'
import './News.css'
import Article from '../Article/Article'
import Aside from '../Aside/Aside'

const News = () => {
  return (
    <div className='newsContainer mediaContainer'>
      <Aside />
      <Article />
    </div>
  )
}
export default News
