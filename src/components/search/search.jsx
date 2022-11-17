import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from "react";
import { geo_api_url } from "../../api";
import { getApi } from "../../api";
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState("sld");
    const handleSearch = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    const loadOptions = (inputValue) => {
        return fetch(`${geo_api_url}/cities?minPopulation=100&namePrefix=${inputValue}`, getApi)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`,
                        }
                    }

                    )
                }
            })

    }
    return (
        < AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleSearch}
            loadOptions={loadOptions}
        />
    )
}
export default Search