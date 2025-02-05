import React from 'react'
import { useState } from 'react'

const PersonForm = ({ onSubmit, onPersonChange, onNumberChange }) => {
  return (
    <>
        <h2>Add New</h2>
        <form onSubmit={onSubmit} >
            <div>
            name: <input onChange={onPersonChange} />
            </div>
            <div>
            number: <input onChange={onNumberChange} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
      </>
  )
}

export default PersonForm