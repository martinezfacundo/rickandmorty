import React, { useState, useEffect, useContext, createContext } from 'react'
import './Search.css'
import SearchComponent from '../../components/searchComponent/SearchComponent'
import {BackContext} from '../../components/context/BackContext'


function SearchCharacters () {

    const [config, setConfig] = useState()
    const context = useContext(BackContext)

    useEffect(() => {
        context.setCategory('search')
    }, [])

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