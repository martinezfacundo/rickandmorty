import React from 'react'
import './ClickDetail.css'

function ClickDetail ({data}) {
    return (
        <div className='clickdetail-container'>
            <div className='imagen-container'>
                <img className='click-imagen' src={data.results[0].image} /> 
            </div>
            <div className='click-info-container'>
                <div className='info-h2'>
                    <h2>{data.results[0].name}</h2>
                </div>
                <div className='click-info'>
                    <h3>Status: <span>{data.results[0].status}</span></h3>
                    <h3>Species: <span>{data.results[0].species}</span></h3>
                    <h3>Gender: <span>{data.results[0].gender}</span></h3>
                    <h3>From: <span>{data.results[0].origin.name}</span></h3>
                    <h3>Last location: <span>{data.results[0].location.name}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default ClickDetail