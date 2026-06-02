import React from 'react'
import { useEffect,useState } from 'react'
function UseEffect() {
  const [time, setTime] = useState(0)
   
 useEffect(


 ()=>{


 const interval =   setInterval(() => {
        setTime(c =>c + 1)
    }, 1000);

  return ()=>clearInterval(interval)

 },[]

 )


  return (
    
      

<h1>
    {
        time
    }
</h1>

    
  )
}

export default UseEffect



// export default function UseEffect() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount(c => c + 1); // ✅ Pass a state updater
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []); // ✅ Now count is not a dependency

//   return <h1>{count}</h1>;
// }
