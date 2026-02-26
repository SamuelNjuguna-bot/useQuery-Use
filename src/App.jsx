
import './App.css'
import TestPage from './Pages/testPage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    
     <Routes>
      <Route path='/' element={<TestPage/>}>
        Test
      </Route>
     </Routes>
    
  )
}

export default App
