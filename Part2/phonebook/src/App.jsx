import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import Persons from './components/Persons'
import FilteredPersons from './components/FilteredPersons'
import PersonForm from './components/PersonForm'
import personService from './services/personService'
import SNotification from './components/SNotification'
import ENotification from './components/ENotification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleAddPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const exists = persons.find(person => person.name === newName) 

    exists 
    ? confirm(`Update ${newName}'s number?`) &&
      personService
        .update(exists.id, personObject)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === updatedPerson.id 
            ? updatedPerson
            : person))
            setSuccessMessage(
              `Updated ${newName}'s number`
            )
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
        }).catch(error => {
          setErrorMessage(
            `Information of ${newName} has already been removed from the server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
      }) 
      : personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          // setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(
            `Added ${returnedPerson.name}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
  }

  const handleDeletePerson = (id, name) => {
    const confirmDelete = confirm(`Delete ${name}`)
    if(confirmDelete){
      personService
        .deletePerson(id)
        .then(person => {
          setPersons(persons.filter(person => person.id !== id))
    }).catch(error => {
        console.log(error)
    })
    }else{
      console.log('maybe not')
      alert('ok then')
    }
      
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
        {successMessage && <SNotification message={successMessage}/>}
       
        {errorMessage && <ENotification message={errorMessage}/>}

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

      <Persons persons={persons} handleDeletePerson={handleDeletePerson} />

    </div>
    
  )
}

export default App