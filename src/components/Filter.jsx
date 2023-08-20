const Filter = ({ searchInput, filterInput }) => {
    const regions = [
        {
            value: "africa",
            label: "Africa"
        },
        {
            value: "america",
            label: "America"
        },
        {
            value: "asia",
            label: "Asia"
        },
        {
            value: "europe",
            label: "Europe"
        },
        {
            value: "oceania",
            label: "Oceania"
        }
    ]
    return (
        <div className="max-w-[1200px] px-4 md:px-0 mx-auto py-6 flex flex-wrap justify-between gap-4">
            <input type="text" placeholder="Search for a country..." className="input input-bordered w-full md:max-w-xs"
                onChange={searchInput} />
            <select className="select select-bordered w-full max-w-xs" onChange={filterInput} defaultValue={''}>
                <option value={''}>Filter by Region</option>
                {regions.map((region, index) => (
                    <option key={index} value={region.value}>{region.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter