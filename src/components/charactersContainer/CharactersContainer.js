import './CharactersContainer.css'
import CharacterDetail from '../charactersDetail/CharacterDetail'

const a = {color:'white',margin:'0'}

function CharactersContainer ({charactersData}) {

    if (charactersData === undefined) {
        return (
            <div>
                searching
            </div>
        )
    } else if (charactersData.length > 1) {
        return (
            <div className='characterscontainer-container'>
                {charactersData.map(
                character => <CharacterDetail name={character.name} image={character.image} species={character.species} status={character.status} location={character.location.name}/>)}
            </div>
        )
    } else if (charactersData.length == 1){
        return (
            <div className='characterscontainer-container'>
                <CharacterDetail name={charactersData[0].name} image={charactersData[0].image} species={charactersData[0].species} status={charactersData[0].status} location={charactersData[0].location.name}/>
                {console.log('data -->', charactersData)}
            </div>
        )
    } else {
        return (
            <div>
                searching
            </div>
        )
    }
}

export default CharactersContainer;