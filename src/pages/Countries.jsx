import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../components/Filter'
import Card from '../components/Card'
import Spinner from '../components/Spinner'
import NotFound from '../components/NotFound'

const Countries = () => {
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    const [keyword, setKeyword] = useState("")

    const fetchCountries = async () => {
        try {
            const data = await axios.get("https://restcountries.com/v3.1/all")
            setCountries(data.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const getSearchInput = (e) => {
        setTimeout(() => {
            setKeyword(e.target.value)
        }, 3000)
    }

    const fetchCountriesBySearch = async (name) => {
        try {
            const data = await axios.get("https://restcountries.com/v3.1/name/" + name)
            setCountries(data.data)
            setLoading(false)
        } catch (err) {
            setTimeout(() => {
                setCountries([])
                setLoading(false)
                console.log(err)
            }, 3000)
        }
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
            {countries == 0 && <NotFound />}
        </>
    )
}

export default Countries