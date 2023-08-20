import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Countries from './pages/Countries'
import Country from './pages/Country'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </>
  )
}

export default App
