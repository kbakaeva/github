import React from 'react'
import './search.css'

export default function Search({send, changeName, name}) {
   
    return (
        <div className='header'>
        <form className='click' onSubmit={send}>
            <input 
            className='searchName'
            value = {name}
            placeholder = 'SEARCH'
            onChange = {(e)=>changeName(e.target.value) }
            />
            <button className='push' type="submit"><i className="fa fa-search"></i></button>
        </form>
        </div>
    )
}
