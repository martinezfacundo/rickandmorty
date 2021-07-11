import React from 'react';
import './CharacterDetail.css'

function CharacterDetail ({id,name,image,species,status,location}) {
    return (
        <div className='charactersdetail-container'>
            <div className='detail'>
                <h2>{name}</h2>
                <img src={image} alt='character image' />
                <h3>Species: <span>{species}</span></h3>
                <h3>Status: <span>{status}</span></h3>
                <h3>Location: <span>{location}</span></h3>
            </div>
        </div>
    )
}

export default CharacterDetail