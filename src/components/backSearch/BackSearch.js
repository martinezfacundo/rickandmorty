import React, {useEffect, useContext} from 'react'
import './BackSearch.css'
import {Link} from 'react-router-dom'
import { BackContext } from '../context/BackContext'

function BackSearch () {

    const context = useContext(BackContext)

    return (
        <div className='backsearch-container'>
            <Link to={`/${context.category ? context.category : ''}`}><button onClick={() => console.log('hola')}><div className='flecha'>BACK</div></button></Link>  
        </div>
    )
}

export default BackSearch