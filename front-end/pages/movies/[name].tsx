import requests from '../../utils/requests'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Movies from '../../components/Movies'



const Details = ({results,id,trailer}:any)=>{

  console.log(results)

  //const route = useRouter();
  //const id = (route.asPath.split('/')).pop()
  //console.log('Route = ',route)
  //console.log(props.params)
  //const result = (results.filter((result:any)=>{
   // if (result.id==id){
     // return{
      //  result
     // }
  //  }
 // }))[0]

    return(
      <>
      <Head>
      <title>Free Streaming Site</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Header></Header>
      <Navbar></Navbar>
        <div>
            <div>

              <Movies result={results} trailer={trailer}></Movies>
            </div>

        </div>
        </>
    )
}
export async function getServerSideProps(context:any){
  const movie_id = context.params.name;
  
  //console.log(context)
  //console.log(genre)
  //console.log('Context query = ',context.query)
  
  //console.log('Route = ',route)
  
  const API_KEY:any = process.env.API_KEY
  const video_url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  const request = await fetch(`${url}`)
  const data = await request.json()

  const video_data = await fetch(`${video_url}`)
  const video_trailer = await video_data.json()
  const trailer = video_trailer.results.filter((value:any)=>{
      if (value.type==='Trailer'){
        return{
          value
        }
      }
  })

  return{
    props:{
      results:data,
      id:movie_id,
      trailer:trailer[0],
    }
  }
}
export default Details;