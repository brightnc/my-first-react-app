import { useState } from 'react'
import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  isLoggedIn: boolean
}
const Greeting = ({ name, isLoggedIn }: IGreetingProps) => {
  const [greetingMsg, setGreetingMsg] = useState<boolean>(false)
  const handleClick = () => {
    setGreetingMsg(!greetingMsg)
  }
  return (
    <>
      <div className={classes.card}>
        <h3>{greetingMsg ? 'Hello!' : 'Welcome!'}</h3>
        <p>{isLoggedIn ? name : 'Unknown'}</p>
      </div>
      <button onClick={handleClick}>Change greeting message</button>
    </>
  )
}
export default Greeting
