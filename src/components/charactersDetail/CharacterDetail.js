import React from 'react';
import './CharacterDetail.css'

function CharacterDetail ({id,name,image,species,status,location,type,dimension,residents,airDate}) {
    return (
        <div className='charactersdetail-container'>
            <div className='detail'>
                {image && <img src={image} alt='character image' />}
                <h2>{name}</h2>
                <h2>{dimension}</h2>
                <h2>{type}</h2>
                <h2>{airDate}</h2>
            </div>
        </div>
    )
}

export default CharacterDetail