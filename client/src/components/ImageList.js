import React from 'react'
import ImageShow from './ImageShow'

// *** extract
const ImageList = ({ images }) => {
  // ***
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />
  })

  // ***
  return <div>{renderedImages}</div>
}

export default ImageList
