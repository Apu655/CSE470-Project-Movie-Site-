import { UserContext } from "../context/UserContext"
import Thumbnail from "./Thumbnail"
import {useContext} from 'react'
// import FlipMove from 'react-flip-move';
import Link from "next/link"

const Results= ({results}:any)=>{
  const {query,setQuery} = useContext(UserContext)
  console.log(results)
    return(
      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 transition-all duration-200">
          {results.filter((res:any)=>res["title"]&&res["title"].toLowerCase().includes(query)).map((result:any)=>(
            <Thumbnail key={result.id} result={result} className=''></Thumbnail>
            
          ))}
      </div>
      )
}


export default Results