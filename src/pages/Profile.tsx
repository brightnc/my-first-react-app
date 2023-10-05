import Greeting from '../components/Greeting'

const Profile = () => {
  const name: string = 'Bright'
  const isLoggedIn: boolean = true
  return (
    <div>
      <Greeting name={name} isLoggedIn={isLoggedIn} />
    </div>
  )
}
export default Profile
