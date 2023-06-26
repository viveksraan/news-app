import './Aside.css'
import add1 from '../assets/add1.png'
import add2 from '../assets/add2.jpeg'
import add3 from '../assets/add3.jpeg'
import add4 from '../assets/add4.jpeg'
import add5 from '../assets/add5.jpeg'
import add6 from '../assets/add6.jpeg'
import { useEffect, useState } from 'react'

const Aside = ({ newsUrl, setNewsUrl }) => {
  const adds = [
    { id: 1, add: add1 },
    { id: 2, add: add2 },
    { id: 3, add: add3 },
    { id: 4, add: add4 },
    { id: 5, add: add5 },
    { id: 6, add: add6 },
  ]
  const [add, setAdd] = useState(adds[0])
  const [addActive, setAddActive] = useState(true)

  const addHandler = async () => {
    setAddActive(false)
  }
  useEffect(() => {
    const intervalID = setInterval(() => {
      setAdd(adds[add.id % 6])
    }, 5000)
    return () => {
      clearInterval(intervalID)
    }
  })
  if (!addActive) return
  return (
    <aside className='asideContainer mediaContainer'>
      <div className='add-container mediaContainer'>
        <img src={add.add} alt='' className='add' />
        <button onClick={addHandler} className='addDisablerBtn'>
          X
        </button>
      </div>
    </aside>
  )
}
export default Aside
