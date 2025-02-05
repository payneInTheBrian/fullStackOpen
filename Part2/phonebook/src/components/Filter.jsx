import React from 'react'

const Filter = ({ onChange }) => {
    return (
      <div>
        Find Person <input onChange={onChange} />
      </div>
    )
  }

export default Filter