import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import Persons from './components/Persons'
import FilteredPersons from './components/FilteredPersons'
import PersonForm from './components/PersonForm'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
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
    persons.find(person => person.name === newName) ? 
      alert(`${newName} is already added to phonebook`) :
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          console.log(response)
    })
    setNewName('')
    setNewNumber('')
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