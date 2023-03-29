import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0) // ***

  const renderedItems = items.map((item) => {
    // ***
    if (expandedIndex) {
      console.log('expanded')
    } else {
      console.log('collapsed')
    }

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default Accordion
