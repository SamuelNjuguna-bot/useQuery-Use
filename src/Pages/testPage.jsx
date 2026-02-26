import axios from "axios"
import {useQuery} from "@tanstack/react-query"
import { useState } from "react"
function TestPage() {
      const [isfetching, setIsFetching] = useState(false)
    const {data, refetch} = useQuery({
      queryKey:["Query Key"],
      queryFn: async () => {
     const res = await axios.post("http://localhost:3000/test")
     return res.data
      },
      enabled:isfetching
    })
   async function handleTest(){
     console.log("clicked")
    setIsFetching(true)

   }
  return (
    <div>
      <h1>Hello useQuery</h1>
      <button onClick={
         (e)=>{
          e.preventDefault
          handleTest()
         }

      }>


        Test Route
      </button>
      

    </div>
  )
}

export default TestPage
