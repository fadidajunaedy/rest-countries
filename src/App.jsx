import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'

function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

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
      <div className="container max-w-[1200px] mx-auto py-6 flex justify-between">
        <input type="text" placeholder="Search for a country..." className="input input-bordered w-full max-w-xs" />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <section className='container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-0'>
          {countries.map((country, index) => (
            <a key={index} href='asd' className="bg-base-100 shadow-xl rounded-md overflow-hidden">
              <figure className='h-40 w-full'>
                <img className='h-full w-full' src={country.flags.svg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{country.name.common}</h2>
                <p className='font-semibold'>Population : <span className='font-normal'>{country.population.toLocaleString("en-US")}</span></p>
                <p className='font-semibold'>Region : <span className='font-normal'>{country.region}</span></p>
                <p className='font-semibold'>Capital : <span className='font-normal'>{country.capital}</span></p>
              </div>
            </a>
          ))}
        </section>
      )}
    </>
  )
}

export default App
