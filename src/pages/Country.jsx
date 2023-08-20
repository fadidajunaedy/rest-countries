import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"
import { BsArrowLeftShort } from "react-icons/bs";

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

        } catch (err) {
            console.error("Error fetching country data: ", err);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchCountry()
    }, [name])

    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <div className="container max-w-[1200px] mx-auto px-4 my-12 md:px-0">
                        <Link to="/" className="btn bg-base-100" onClick={resetState}><BsArrowLeftShort /> Back</Link>
                    </div>
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
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="flex mb-8 md:mb-0">
                                        <img className="w-full" src={flag} alt={name} />
                                    </div>
                                    <div className="flex flex-col justify-center items-start py-4 md:py-0 md:px-8">
                                        <h2 className="text-2xl font-bold mb-6">{name}</h2>
                                        <div className="detail flex flex-col md:flex-row justify-between mb-8 gap-2 w-full">
                                            <ul className="flex flex-col gap-2">
                                                <li className="font-bold">Native Name: <span className="font-normal">{nativeName}</span></li>
                                                <li className="font-bold">Population: <span className="font-normal">{population.toLocaleString()}</span></li>
                                                <li className="font-bold">Region: <span className="font-normal">{region}</span></li>
                                                <li className="font-bold">Sub Region: <span className="font-normal">{subregion}</span></li>
                                                <li className="font-bold">Capital: <span className="font-normal">{capital}</span>{" "}</li>
                                            </ul>
                                            <ul className="flex flex-col gap-2">
                                                <li className="font-bold">Top Level Domain: <span className="font-normal">{topLevelDomain}</span></li>
                                                <li className="font-bold">Currencies: <span className="font-normal">{currencies[0].name}</span></li>
                                                <li className="font-bold">Languages: {languages.map(language => <span className="font-normal" key={language.name}>{language.name}, </span>)}</li>
                                            </ul>
                                        </div>

                                        <div className="bottom flex flex-col md:flex-row justify-center gap-4">
                                            <p className="font-bold">Border Countries: </p>
                                            <div className="flex flex-wrap gap-4">
                                                {borders && borders.map((border) => {
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
                    }).filter((arr, index) => index < 1)}
                </>
            )
            }
        </>
    )
}

export default Country