import React from 'react'
import Person from './Person'

const Persons = ({ persons, handleDeletePerson }) => {
  return (
    <ul>
        {persons.map((person) => <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson}/> )}
    </ul>
  )
}

export default Persons