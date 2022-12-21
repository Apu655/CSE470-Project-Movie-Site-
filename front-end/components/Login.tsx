import React,{useState,useContext} from 'react'
import {UserContext} from "../context/UserContext"
import Router from 'next/router'
import jwtDecode from 'jwt-decode'
type Props = {}

const Login = (props: Props) => {
    const {user,setUser,authToken,setAuthToken}=useContext(UserContext)
    const [userInfo,setUserInfo] = useState({
        username:"",
        password:"",
        email:"opu.razzak@gmail.com",
    })
    // const [user,setUser] = useState({
    //     username:"Apu Islam",
    //     email:"opu.razzak@gmail.com"

    // })
    const handleChange = (e:any)=>{
        const {value,name} = e.target
        setUserInfo((prev:any)=>{
            return {...prev,[name]:value}
        })
        console.log(user)
        console.log("UserInfo : ",userInfo)

    }
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        const res = await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userInfo)

        })
        console.log(res)
        const data = await res.json()
        setUser(jwtDecode(data.accessToken))
        Router.push("/")
        
        // setUser(data["accessToken"])
        // Router.push("/")
    }
  return (
    <div className=''>
        <div className='text-center text-5xl font-bold my-4 flex flex-col'>
            JAMBO
            <p className='text-sm font-light '>Join the biggest online streaming site today</p>
        </div>
        
        <form className="w-96 flex flex-col space-y-4">
            <div>
                <input onChange={handleChange} className="rounded p-2 bg-transparent border-b focus:outline-none w-full" type="text" name="username" placeholder='username'/>
            </div>
            <div>
                <input onChange={handleChange} className="rounded p-2 bg-transparent border-b focus:outline-none w-full" type="password" name="password" placeholder='Password'/>
            </div>
            <p className='text-xs my-2 cursor-pointer hover:text-gray-400'>Forgot your password?</p>
            <button onClick={handleSubmit} className="bg-red-600 w-full py-2 hover:bg-red-700 font-semibold" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login