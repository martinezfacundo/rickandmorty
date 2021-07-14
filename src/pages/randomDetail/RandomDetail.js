import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SearchDetail.css'
import ClickDetail from '../../components/clickDetail/ClickDetail'

function RandomDetail () {

    const {id} = useParams()
    const [search, setSearch] = useState([])

    const getCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${id}`)
        const data = await response.json()
        setSearch(data)
    }

    useEffect(() => getCharacter(), [])

    return (
        <div className='detail-page'>
            {search.results && <ClickDetail data={search}/>}
            <div className='container-degradado-detail'></div>
        </div>
    )
}

export default RandomDetail