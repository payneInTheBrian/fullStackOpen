import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import Persons from './components/Persons'
import FilteredPersons from './components/FilteredPersons'
import PersonForm from './components/PersonForm'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleAddPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
      })
   
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
      setFilter(event.target.value)
  }

  const filterNames = persons.filter(person => 
    person.name.toLowerCase().includes(filter)
  )
  
  return (
    <div>
      <h2>Phonebook</h2>

        <Filter onChange={handleFilter} />

        <FilteredPersons 
          filterNames={filterNames} 
          persons={persons}
        />

      <PersonForm 
        onPersonChange={handlePersonChange} 
        onNumberChange={handleNumberChange} 
        onSubmit={handleAddPerson} 
      />

      <h2>People</h2>

      <Persons persons={persons} />

    </div>
    
  )
}

export default App