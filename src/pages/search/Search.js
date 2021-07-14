import React, { useState } from 'react'
import './Search.css'
import SearchComponent from '../../components/searchComponent/SearchComponent'

function SearchCharacters () {

    const [config, setConfig] = useState()

    return (
        <div className='search-page'>
            {!config && <div className='buttons-container'>
                            <button className='character-button' onClick={() => setConfig('character')}>Characters</button>
                            <button className='location-button' onClick={() => setConfig('location')}>Locations</button>
                            <button className='episode-button' onClick={() => setConfig('episode')}>Episodes</button>
                        </div>}
            {config && <SearchComponent type={config}/>}
            <div className='container-degradado-search'></div>
        </div>
    )
}

export default SearchCharacters