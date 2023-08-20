import { Link } from "react-router-dom"

const Card = ({ flag, name, population, region, capital }) => {
    return (
        <Link to={`/country/${name}`} className="bg-base-100 shadow-xl rounded-md overflow-hidden" >
            <figure className='h-40 w-full'>
                <img className='h-full w-full' src={flag} alt={name} />
            </figure >
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-semibold'>Population : <span className='font-normal'>{population}</span></p>
                <p className='font-semibold'>Region : <span className='font-normal'>{region}</span></p>
                <p className='font-semibold'>Capital : <span className='font-normal'>{capital}</span></p>
            </div>
        </Link >
    )
}

export default Card