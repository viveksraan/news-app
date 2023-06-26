import './NewsCard.css'

const NewsCard = ({ title, description, url, urlToImage }) => {
  // console.log(props.title)
  return (
    <div className='container news-card-container'>
      <img src={urlToImage} alt='News related Image' className='newsDP' />
      <h3 className='newsHeading'>
        {title ? title.slice(0, 70) : `untitled news`}
      </h3>
      <p className='newsDesc'>
        {description ? description.slice(0, 100) : `description not available`}
      </p>
      <button className='newsBtn'>
        <a href={url} className='newsLink'>
          Read
        </a>
      </button>
    </div>
  )
}
export default NewsCard
