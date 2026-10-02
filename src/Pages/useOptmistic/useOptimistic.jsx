import React, { startTransition } from 'react'
import { useOptimistic } from 'react'
function UseOptimistic() {
    const [optimistic, setOptimistic] = useOptimistic(null)


    function handleClickMe(){
    startTransition(async()=>{
        setOptimistic(1),
        console.log(optimistic)
        await saveChanges();
    })
    }
  return (
    <div>
  <button onClick={handleClickMe}>
    Button
  </button>
    </div>
  )
}
export default UseOptimistic
