import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Filter from './components/Filter'
import Card from './components/Card'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    setLoading(true);
    const fetchCountries = async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all");

      setCountries(data.data);
      setLoading(false);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <Header />
      <Filter />
      {loading ? (<span className="loading loading-spinner loading-lg"></span>) : (
        <section className='container max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0'>
          {countries.map((country, index) => (
            <Card
              key={index}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default App
