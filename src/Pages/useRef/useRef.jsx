import React from 'react'



// It is stable in astable environment. This means it wount cause a component to re-render upon its change. unlike state
// A practical example would be storing an event change.
// It only chane if there is a refresh of the page

import { useRef } from 'react'
function UseRef() {
 let inputRef = useRef("")

  return (
    <div>
     <input type="text" onChange={(e)=>{
      inputRef = e.target.value
     }} />
<button onClick={(e)=>{
  e.preventDefault
  console.log(inputRef)
}}>
Enter
</button>
    </div>
  )
}

export default UseRef
