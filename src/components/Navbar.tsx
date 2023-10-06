import { useAuth } from '../providers/AuthProvider'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn } = useAuth()

  console.log('From NavBar : ', isLoggedIn)
  return (
    <div className={classes.nav}>
      <div className={classes.menu}>
        <h3>Navbar</h3>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/login">
          <button className={classes.loginBtn}>Login</button>
        </NavLink>
      </div>
    </div>
  )
}
export default Navbar
