import React, { useState } from 'react'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap = {
  bird,
  cow,
  cat,
  dog,
  gator,
  horse,
}

const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(1) // ***

  // ***
  const handleClick = () => {
    setClick(click + 1)
  }

  return (
    <div onClick={handleClick}>
      <img src={svgMap[type]} alt={type} />
      <img src={heart} alt='heart' style={{ width: 10 + 10 * click + 'px' }} />
    </div>
  )
}

export default AnimalShow
