import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ReadMore from './pages/ReadMore'

function App() {
  ;<Layout />
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/details" element={<ReadMore />} />
         
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
