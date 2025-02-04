import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName
    }
    persons.find(person => person.name === newName) ? 
      alert(`${newName} is already added to phonebook`) :
      setPersons(persons.concat(personObject))
    setNewName('')
    
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form>

        <div>
          name: <input onChange={handlePersonChange} />
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>
   
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <Person key={person.name} person={person} /> )}
      </ul>
    </div>
    
  )
}

export default App