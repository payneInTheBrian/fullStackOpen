import React from 'react'
import Person from './Person'

const FilteredPersons = ({ filterNames, persons, event }) => {
  return (
    filterNames.length !== persons.length && filterNames.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
        
      ))
  )
}

export default FilteredPersons