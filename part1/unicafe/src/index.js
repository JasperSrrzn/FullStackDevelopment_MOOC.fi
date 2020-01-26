import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const FeedbackTitle = () => <h1> give feedback </h1>

const Button = ({name,onClick}) => <button onClick={onClick}>{name}</button>

const StatisticsTitle = () => <h1>statistics</h1>

const Statistic = ({name, value, unit}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}

const Table = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <Statistic name='good' value={props.good}/>
          <Statistic name='neutral' value={props.neutral}/>
          <Statistic name='bad' value={props.bad}/>
          <Statistic name='all' value={props.all}/>
          <Statistic name='average' value={props.score/props.all}/>
          <Statistic name='positive' value={100*props.good/props.all} unit='%'/>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = (props) => {

  const all = props.good + props.neutral + props.bad
  const score = props.good - props.bad

  if (all===0){
    return (
      <div>
        <StatisticsTitle/>
        <p></p>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <StatisticsTitle/>
      <Table good={props.good} neutral={props.neutral} bad={props.bad} all={all} score={score}/>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)


  return (
    <div>
    <FeedbackTitle/>
    <Button name='good' onClick={handleGood}/>
    <Button name='neutral' onClick={handleNeutral}/>
    <Button name='bad' onClick={handleBad}/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
