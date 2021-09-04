import React from 'react'

const Content = (props) => {
  const { title } = props
  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
    </div>
  )
}

export default Content
