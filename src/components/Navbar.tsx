import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className={classes.nav}>
      <div className={classes.menu}>
        <h3>Navbar</h3>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
              Create
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
              Profile
            </NavLink>
            <button onClick={handleLogout} className={classes.loginBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={classes.loginBtn}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
export default Navbar
