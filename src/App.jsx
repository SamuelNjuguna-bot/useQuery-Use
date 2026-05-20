
import './App.css'
import TestPage from './Pages/testPage'
import UseReducer from './Pages/StateManagement/Hooks/useReducerHook'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    
     <Routes>
      <Route path='/' element={<TestPage/>}>
      
        Test
      </Route>
      <Route path='/usereducer' element={<UseReducer/>}>
     UseReducer
      </Route>
     </Routes>
    
  )
}

export default App
