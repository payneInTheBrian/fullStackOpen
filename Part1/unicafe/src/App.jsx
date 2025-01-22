import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ( props ) => {
   return <button onClick={props.onClick}>{props.text}</button>
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

 const handleReset = (props) => {
  setGood(0)
  setBad(0)
  setNeutral(0)
 }


  const Feedback = ({ props }) => {
    return (
      <>
        <h1>Give Feedback</h1>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad"  />
        <Button onClick={handleReset} text="reset" />
      </>
    )
  }

  const StatisticsLine = (props) => {
    return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
    
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
            <table>
              <tbody>
                <StatisticsLine text="good" value={good} />
                <StatisticsLine text="neutral" value={neutral} />
                <StatisticsLine text="bad" value={bad} />
                <StatisticsLine text="all" value={all} />
                <StatisticsLine text="average" value={average + " %"} />
                <StatisticsLine text="positive" value={positive + " %"} />
              </tbody>
            </table>
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
        <button onClick={handleGoodClick}>{ratings.good}</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div> */}
      <Feedback 
        handleGoodClick={handleGoodClick} 
        handleBadClick={handleBadClick} 
        handleNeutralClick={handleNeutralClick}
        handleReset={handleReset}
      />
        
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
