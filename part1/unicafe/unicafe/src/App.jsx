import { useState } from "react"

const Display = ({ good, bad, neutral }) => {
  const total = good + bad + neutral
  return (
    <>
      <div>
        Good:
        {good}
      </div>
      <div>
        Neutral:
        {neutral}
      </div>
      <div>
        Bad:
        {bad}
      </div>
      <div>
        all: {total}
      </div>
      <div>
        average:
        {(good - bad) / total}
      </div>
      <div>
        positive:
        {(good / total) * 100}
      </div>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const StatisticsLine = ({ text, value }) => {

  return (
    <div>{text}:{value}</div>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good == 0 && bad == 0 && neutral == 0) {
    return (
      <div>no feedback given</div>
    )
  }
  return (
    <>
      <Header text={'statistics'} />
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="total" value={good + bad + neutral} />
      <StatisticsLine text="average" value={(good - bad) / (good + bad + neutral)} />
      <StatisticsLine text="percentage" value={(good / (good + bad + neutral)) * 100} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text={'give feedback'} />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App