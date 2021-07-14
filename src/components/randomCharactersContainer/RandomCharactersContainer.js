import './RandomCharactersContainer.css'
import CharacterDetail from '../charactersDetail/CharacterDetail'
import React from 'react'

const a = {color:'white',margin:'0'}

function RandomCharactersContainer ({charactersData}) {

    if (charactersData === undefined) {
        return (
            <div>
                Searching...
            </div>
        )
    } else if (charactersData.length > 1) {
        return (
            <div className='random-container'>
                {charactersData.map(
                character => <CharacterDetail name={character.name} image={character.image} species={character.species} status={character.status} location={character.location.name}/>)}
            </div>
        )
    } else if (charactersData.length == 1){
        return (
            <div className='random-container'>
                <CharacterDetail name={charactersData[0].name} image={charactersData[0].image} species={charactersData[0].species} status={charactersData[0].status} location={charactersData[0].location.name}/>
                {console.log('data -->', charactersData)}
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

export default RandomCharactersContainer;