import { useReducer } from 'react'
function UseReducer() {

     function reducer(state,action){
  if(action.type ==="countdown"){
     return{
      count:state.count++
     }
  }

  else if(action.type==="downcount"){
    return{
      count:state.count-1
    }
  }
  else{
    console.log("wrong dispatch event")
  }
     }
    const [state, dispatch]=useReducer(reducer, {count:0})
  return (
    <div>
      <button
      onClick={()=>{
        dispatch({type:"countdown"})
      }}
      >
       Countdown
      </button>
           <button
      onClick={()=>{
        dispatch({type:"downcount"})
      }}
      >
       DownCount
      </button>
      <h3>
        `The original counter is ${state.count}`
      </h3>
    </div>
  )
}

export default UseReducer
