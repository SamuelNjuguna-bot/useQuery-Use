
import './App.css'
import TestPage from './Pages/testPage'
import UseReducer from './Pages/StateManagement/Hooks/useReducerHook'
import UseRef from './Pages/useRef/useRef'
import UseEffect from './Pages/UseEffect/useEffect'
import { Route, Routes } from 'react-router-dom'
import UseOptimistic from './Pages/useOptmistic/useOptimistic'
function App() {

  return (
    
     <Routes>
      <Route path='/' element={<TestPage/>}>
      
        Test
      </Route>
      <Route path='useoptimistic' element={<UseOptimistic/>}>
      
        Test
      </Route>
      <Route path='/usereducer' element={<UseReducer/>}>
     UseReducer
      </Route>
         <Route path='/useref' element={<UseRef/>}>
     UseRef
      </Route>
      <Route path='/useeffect' element={
        <UseEffect/>
      }>
        UseEffect

      </Route>
     </Routes>
    
  )
}

export default App
