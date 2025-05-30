import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './components/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
