import axios from 'axios'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  login: (username: string, password: string) => Promise<void>
  username: string | null
  logout: () => void
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    const url = 'https://api.learnhub.thanayut.in.th/auth/login'
    try {
      const res = await axios.post<CredentialDTO>(url, loginBody, { headers: { 'Content-Type': 'application/json' } })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (error) {
      throw new Error('Invalid username or password !')
    }
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    setUsername(null)
  }
  return <AuthContext.Provider value={{ isLoggedIn, login, username, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
