import React,{useState, useEffect} from 'react'
import './RandomCharacters.css'
import CharactersContainer from '../../components/charactersContainer/CharactersContainer'

function Characters () {

    const [characters, setCharacters] = useState([])

    const getRandomInt = (min, max) => {
        return(Math.floor(Math.random() * (max - min)) + min);
    }    

    const getCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)}`);
        const data = await response.json()
        setCharacters(data)
        console.log(characters)
    }

    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div className='characters-page'>
            <div className='characters-container'>
                <CharactersContainer charactersData={characters}/>
                {console.log(characters)}
            </div>
            <div className='container-degradado-characters'>
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

export default Characters;