import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex)
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    // ***
    const icon = <b>{isExpanded ? 'Down' : 'Left'}</b>

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {/* *** */}
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    )
  })

  return <div>{renderedItems}</div>
}

export default Accordion
