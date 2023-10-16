import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import Edit from './pages/Edit'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
