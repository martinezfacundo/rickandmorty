import './ResultsContainer.css'
import CharacterDetail from '../charactersDetail/CharacterDetail'
import React from 'react'

const a = {color:'white',margin:'0'}

function ResultsContainer ({data, type}) {

    if (data === undefined) {
        return (
            <div>
                Searching...
            </div>
        )
    } else if (data.length > 1) {
        return (
            <div className='characterscontainer-container'>
                {type === 'character' &&
                data.map(
                character => <CharacterDetail name={character.name} image={character.image} species={character.species} status={character.status} location={character.location.name} id={character.id}/>)}
                {type === 'location' &&
                data.map(
                character => <CharacterDetail id={character.id} name={character.name} type={character.type} dimension={character.dimension} />)}
                {type === 'episode' &&
                data.map(
                character => <CharacterDetail id={character.id} name={character.name} airDate={character.air_date}/>)}
            </div>
        )
    } else if (data.length == 1){
        return (
            <div className='characterscontainer-container'>
                {type == 'character' && 
                <CharacterDetail id={data[0].id} name={data[0].name} image={data[0].image} species={data[0].species} status={data[0].status} location={data[0].location.name}/>}
                {type == 'location' && 
                <CharacterDetail id={data[0].id} name={data[0].name} type={data[0].type} type={data[0].dimension} type={data[0].type} type={data[0].residents} />}
                {type == 'episode' && 
                <CharacterDetail id={data[0].id} name={data[0].name} airDate={data[0].air_date} />}
            </div>
        )
    }
}

export default ResultsContainer;