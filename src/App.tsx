import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

const name: string = 'Bright'
const greetingMsg: string = 'Hello'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name={name} greetingMsg={greetingMsg} isLoggedIn={false} />
    </div>
  )
}

export default App
