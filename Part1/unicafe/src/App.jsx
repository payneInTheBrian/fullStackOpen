import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => {
   <button onClick={props.onClick}>{props.text}</button>
  }

  const handleGoodClick = (props) => {
    setGood(good + 1)
 }
 
 const handleNeutralClick = (props) => {
   setNeutral(neutral + 1)
 }
 
 const handleBadClick = (props) => {
   setBad(bad + 1)
 }

 const reset = (props) => {
  setGood(0)
  setBad(0)
  setNeutral(0)
 }


  const Feedback = () => {
    return (
      <>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <button onClick={reset}>reset</button>
      </>
    )
  }

  const Statistics = (props) => {
    const all = good + bad + neutral
    const average = (good - bad) / all
    const positive = good / all
    
    return(
      <>
        <h1>Statistics</h1>
        {all ? 
          <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average} %</p>
            <p>positive {positive} %</p>
          </div>
          : <p>No Feedback Given </p>
        } 
      </>
    )
  }
  
  

  return (
    <>
      {/* <div>
        <h2>give feedback</h2>
        {console.log(ratings[0])}
        <button onClick={handleGoodClick}>{ratings.good}</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div> */}
      <Feedback 
        handleGoodClick={handleGoodClick} 
        handleBadClick={handleBadClick} 
        handleNeutralClick={handleNeutralClick}/>
        
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </>
  )
}

export default App
