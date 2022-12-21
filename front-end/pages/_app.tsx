import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {UserContext} from "../context/UserContext"
import {useState} from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [user,setUser] = useState({
    username:null,
    email:""
  })

  const [authToken,setAuthToken] = useState()
  const [query,setQuery] = useState("")
  return (

  <UserContext.Provider value={{user,setUser,authToken,setAuthToken,query,setQuery}}>
    <Component {...pageProps} />
  </UserContext.Provider>

  )
}
