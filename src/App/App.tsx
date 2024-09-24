import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from "../Pages/Register/Register"
import Login from '../Pages/Login/Login'
import Error from "../Pages/Error/Error"

import'./App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="all">
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes> 
  </div>
  )
}

export default App