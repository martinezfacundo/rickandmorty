import React,{useState, useEffect} from 'react'
import './RandomCharacters.css'
import RandomCharactersContainer from '../../components/randomCharactersContainer/RandomCharactersContainer'

function RandomCharacters () {

    const [characters, setCharacters] = useState([])

    const getRandomInt = (min, max) => {
        return(Math.floor(Math.random() * (max - min)) + min);
    }    

    const getCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)}`);
        const data = await response.json()
        setCharacters(data)
    }

    return (
        <div className='characters-page'>
            <div className='characters-container'>
                <button onClick={getCharacter}>GENERATE</button>
                <div className='characters'>
                    <RandomCharactersContainer charactersData={characters}/>
                </div>
            </div>
            <div className='container-degradado-characters'>
            </div>
        </div>
    )
}

export default RandomCharacters;