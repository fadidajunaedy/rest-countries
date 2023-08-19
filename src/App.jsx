import './App.css'
import { Routes, Route } from 'react-router-dom'
import Countries from './pages/Countries'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        {/* <Route path="/countries/:name" element={<Country />} /> */}
      </Routes>
    </>
  )
}

export default App
