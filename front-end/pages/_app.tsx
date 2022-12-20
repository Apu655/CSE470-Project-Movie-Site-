import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {UserContext} from "../context/UserContext"
import {useState} from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [user,setUser] = useState({
    username:"",
    email:""
  })

  const [authToken,setAuthToken] = useState()
  return (

  <UserContext.Provider value={{user,setUser,authToken,setAuthToken}}>
    <Component {...pageProps} />
  </UserContext.Provider>

  )
}
