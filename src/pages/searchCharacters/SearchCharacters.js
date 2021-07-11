import React, { useState, useEffect } from 'react'
import './SearchCharacters.css'
import CharactersContainer from '../../components/charactersContainer/CharactersContainer'

function SearchCharacters () {
    const [charactersSearch, setCharactersSearch] = useState([])
    const [search, setSearch] = useState()

    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const getCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
        const data = await response.json()
        setCharactersSearch(data)
    }

    useEffect(() => {
        getCharacter()
    }, [search])

    
    console.log('result', charactersSearch.results)

    if (search != ''){
        return (
            <div className='search-page'>
                <div className='search-container'>
                    <form>
                        <input onChange={handleChange} className='search-input' name='selected-character' placeholder='Tu personaje' type='text' />
                    </form>
                    <CharactersContainer charactersData={charactersSearch.results} />
                </div>
                <div className='container-degradado-search'>
                    <div className='social-container'>
                        <div className='social'>
                            <a href='#'>Instagram</a>
                            <a href='#'>Facebook</a>
                            <a href='#'>Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   else {
            return (
                <div className='search-page'>
                <div className='search-container'>
                    <form>
                        <input onChange={handleChange} className='search-input' name='selected-character' placeholder='Tu personaje' type='text' />
                    </form>
                </div>
                <div className='container-degradado-search'>
                    <div className='social-container'>
                        <div className='social'>
                            <a href='#'>Instagram</a>
                            <a href='#'>Facebook</a>
                            <a href='#'>Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
}
export default SearchCharacters