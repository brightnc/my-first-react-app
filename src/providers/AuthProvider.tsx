import axios from 'axios'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  login: (username: string, password: string) => Promise<void>
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

const token = localStorage.getItem('token')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    const url = 'https://api.learnhub.thanayut.in.th/auth/login'
    try {
      const res = await axios.post<CredentialDTO>(url, loginBody, { headers: { 'Content-Type': 'application/json' } })

      localStorage.setItem('token', res.data.accessToken)
      setIsLoggedIn(true)
    } catch (error) {
      throw new Error('Invalid username or password !')
    }
  }
  return <AuthContext.Provider value={{ isLoggedIn, login }}>{children}</AuthContext.Provider>
}

export default AuthProvider
