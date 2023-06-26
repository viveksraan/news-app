import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import navLogo from '../assets/navLogo.svg'

const Navbar = () => {
  // const navLogo = 'global-news-4305.svg'
  const [searchTerm, setSearchTerm] = useState('Enter search term')

  const searchRef = useRef(null)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleDefaultText = () => {
    setSearchTerm('')
  }

  useEffect(() => {
    searchRef.current.focus()
  })

  return (
    <div className='container nav-container'>
      <div className='nav-logo'>
        <img src={navLogo} alt='' />
      </div>
      <div className='nav-links'>
        <a href='#'>Global News</a>
      </div>
      <div className='search'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearch}
          onClick={handleDefaultText}
          className='search-bar'
          ref={searchRef}
        />
      </div>
    </div>
  )
}
export default Navbar
