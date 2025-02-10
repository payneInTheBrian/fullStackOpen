import React from 'react'

const Header = ({ name }) => {
    return (
      <>  
        <h1>Web development curriculum</h1>
        <h2>{name}</h2>
      </>
    )
}
const Total = ({ parts }) => {
 const total = parts.reduce((s,p) => s + p.exercises, 0)
 return(
   <p>Number of exercises {total}</p>
 )
}

const Part = ({ part, exercises }) => {
  return (
  <p>
    {part} {exercises}
  </p>
  )
}

const Content = ({ parts }) => {
 return parts.map(part => (
  <Part
   part={part.name}
   exercises={part.exercises} 
   key={part.id}
  />
 ))
}

const Course = ({ course }) => {
 return (
   <>
     <Header name={course.name}/>
     <Content parts={course.parts} />
     <Total parts={course.parts}  />
     
   </>
 )
}


export default Course

