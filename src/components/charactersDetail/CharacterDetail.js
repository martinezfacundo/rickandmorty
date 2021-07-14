import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import { BackContext } from '../context/BackContext';
import './CharacterDetail.css'

function CharacterDetail ({id,name,image,species,status,location,type,dimension,residents,airDate}) {

    const context = useContext(BackContext)

    return (
        <div className='charactersdetail-container'>
            <Link className='link-detail' to={`/${context.category}/${name}`}>
                <div className='detail'>
                    {image && <img src={image} alt='character image' />}
                    <h2>{name}</h2>
                    <h2>{dimension}</h2>
                    <h2>{type}</h2>
                    <h2>{airDate}</h2>
                </div>
            </Link> 
        </div>
    )
}

export default CharacterDetail