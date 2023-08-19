import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../components/Filter'
import Card from '../components/Card'
import Spinner from '../components/Spinner'

const Countries = () => {
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    const [keyword, setKeyword] = useState("")

    const fetchCountries = async () => {
        const data = await axios.get("https://restcountries.com/v3.1/all")
        setCountries(data.data)
        setLoading(false)
    };

    const fetchCountriesBySearch = async (name) => {
        const data = await axios.get("https://restcountries.com/v3.1/name/" + name)
        setCountries(data.data)
        setLoading(false)
    };

    const getSearchInput = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        setLoading(true)
        if (keyword.length > 1) {
            fetchCountriesBySearch(keyword)
        } else {
            fetchCountries()
        }
    }, [keyword]);

    return (
        <>
            <Filter searchInput={getSearchInput} />
            {loading ? <Spinner /> :
                <section className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0'>
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
            }
        </>
    )
}

export default Countries