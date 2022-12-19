import React,{useState} from 'react'

type Props = {}

const Login = (props: Props) => {
    const [user,setUser] = useState({
        username:"Apu Islam",
        email:"opu.razzak@gmail.com"

    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const res = await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)

        })
        const data = await res.json()
        console.log(data)
    }
  return (
    <div className=''>
        <div className='text-center text-5xl font-bold my-4 flex flex-col'>
            JAMBO
            <p className='text-sm font-light '>Join the biggest online streaming site today</p>
        </div>
        
        <form className="w-96 flex flex-col space-y-4">
            <div>
                <input className="rounded p-2 bg-transparent border-b focus:outline-none w-full" type="text" placeholder='username'/>
            </div>
            <div>
                <input className="rounded p-2 bg-transparent border-b focus:outline-none w-full" type="password" placeholder='Password'/>
            </div>
            <p className='text-xs my-2 cursor-pointer hover:text-gray-400'>Forgot your password?</p>
            <button onClick={handleSubmit} className="bg-red-600 w-full py-2 hover:bg-red-700 font-semibold" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login