import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const Country = () => {
    const { name } = useParams()
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true);

    const resetState = () => {
        setCountry([])
    }

    const fetchCountry = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v2/name/" + name);
            const data = response.data;
            setCountry(data);
            setLoading(false);
            console.log(country)

        } catch (error) {
            console.error("Error fetching country data: ", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCountry()
        setLoading(false)
    }, [name])

    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    {country.map((c) => {
                        const {
                            numericCode,
                            flag,
                            name,
                            nativeName,
                            population,
                            region,
                            subregion,
                            capital,
                            topLevelDomain,
                            currencies,
                            languages,
                            borders
                        } = c

                        return (
                            <article key={numericCode} className="container max-w-[1200px] mx-auto px-4 py-6 md:px-0">
                                <Link to="/" className="btn mb-6" onClick={resetState}>asdasd</Link>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="flex items-center mb-8 md:mb-0">
                                        <img className="h-96 w-full" src={flag} alt={name} />
                                    </div>
                                    <div className="flex flex-col justify-center items-start md:px-8">
                                        <h2 className="text-2xl font-bold mb-6">{name}</h2>
                                        <div className="detail flex flex-col md:flex-row justify-between gap-2 w-full mb-6">
                                            <ul className="flex flex-col gap-2">
                                                <li>Native Name: <span>{nativeName}</span></li>
                                                <li>Population: <span>{population.toLocaleString()}</span></li>
                                                <li>Region: <span>{region}</span></li>
                                                <li>Sub Region: <span>{subregion}</span></li>
                                                <li>Capital: <span>{capital}</span>{" "}</li>
                                            </ul>
                                            <div className="flex flex-col gap-2">
                                                <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                                                <h5>Currencies: <span>{currencies[0].name}</span></h5>
                                                <h5>Languages: {languages.map(language => <span key={language.name}>{language.name}, </span>)}
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="bottom flex flex-col md:flex-row justify-center gap-4">
                                            <h3>Border Countries: </h3>
                                            <div className="flex flex-wrap gap-4">
                                                {borders.map((border) => {
                                                    return (
                                                        <span key={border} className="bg-slate-400 px-6 py-1 rounded">
                                                            {border}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </article>
                        )
                    })}
                </>
            )
            }
        </>
    )
}

export default Country