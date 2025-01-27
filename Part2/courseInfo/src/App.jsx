 const Header = ({ name }) => <h2>{name}</h2>

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
     {console.log(part.name)}
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map(course => <Course course={course} key={course.id}/>)
}

export default App