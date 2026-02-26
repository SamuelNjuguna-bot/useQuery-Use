import axios from "axios"
function TestPage() {
   async function handleTest(){
    const res = await axios.post("http://localhost:3000/test")
   }
  return (
    <div>
      <h1>Hello useQuery</h1>
      <button onClick={handleTest}>
        Test Route
      </button>

    </div>
  )
}

export default TestPage
