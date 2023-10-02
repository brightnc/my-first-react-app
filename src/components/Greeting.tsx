import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  greetingMsg?: string
}
const Greeting = ({ name, greetingMsg = 'Welcome' }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>{greetingMsg}</h3>
      <p>{name}</p>
    </div>
  )
}
export default Greeting
