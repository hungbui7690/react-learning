import React from 'react'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import cat from './svg/cat.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

// *** no heart (not animals)
const svgMap = {
  bird,
  cow,
  cat,
  dog,
  gator,
  horse,
}

const AnimalShow = ({ type }) => {
  return (
    <div>
      {/* *** */}
      <img src={svgMap[type]} alt={type} />
    </div>
  )
}

export default AnimalShow
