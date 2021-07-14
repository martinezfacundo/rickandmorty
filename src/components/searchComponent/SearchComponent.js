import React, { useState, useEffect } from 'react'
import './SearchComponent.css'
import ResultsContainer from '../resultsContainer/ResultsContainer'

function SearchComponent ({type}) {
    const [results, setResults] = useState([])
    const [search, setSearch] = useState()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const getResults = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/${type}/?name=${search}`);
        const data = await response.json()
        setResults(data)
    }

    useEffect(() => {
        getResults()
    }, [search])

        return (
            <div className='search-page'>
                <div className='search-container'>
                    <form>
                        <input onChange={handleChange} className='search-input' name='selected-character' placeholder='Tu personaje' type='text' />
                    </form>
                    {search && results && <ResultsContainer data={results.results} type={type}/>}
                </div>
                <div className='container-degradado-search'>
                </div>
            </div>
        )
}

export default SearchComponent