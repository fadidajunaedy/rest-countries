const Filter = () => {
    return (
        <div className="container max-w-[1200px] px-4 md:px-0  mx-auto py-6 flex flex-wrap justify-between gap-4">
            <input type="text" placeholder="Search for a country..." className="input input-bordered w-full md:max-w-xs" />
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter