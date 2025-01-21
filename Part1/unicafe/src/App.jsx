import { useState } from 'react'

const Button = () => {
  <button>hello</button>
}

const handleGoodClick = (props) => {
  setGood(good + 1)
}

const handleNeutralClick = (props) => {

}

const handleBadClick = (props) => {

}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ratings = [
    {
      rating: good,

    },{
      rating: neutral,
    },{
      rating: bad
    }
  ]
  

  return (
    <>
      <div>
        <h2>give feedback</h2>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
        <Button />
      </div>
      <div>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </>
  )
}

export default App
