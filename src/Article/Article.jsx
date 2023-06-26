import { useEffect, useState } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import useFetchData from '../useFetchData'
import './Article.css'

const Article = () => {
  const fetchUrl =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=951c945ed2414e30b5b96d1a4028e816'
  const { isLoading, isError, data: news } = useFetchData(fetchUrl)

  if (isLoading)
    return (
      <div className='article-container mediaContainer'>
        <h2>Loading....</h2>
      </div>
    )
  if (isError)
    return (
      <div className='article-container mediaContainer'>
        <h2>Error....</h2>
      </div>
    )
  return (
    <div className='article-external-container mediaContainer'>
      <div className='articleHeading'>
        <h1>Todays Headlines</h1>
      </div>
      <div className='article-internal-container mediaContainer'>
        {news.articles.map((article) => {
          return (
            <NewsCard
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              key={article.url}
            />
          )
        })}
      </div>
    </div>
  )
}
export default Article
