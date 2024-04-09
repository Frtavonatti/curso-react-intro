import React from 'react'
import './styles.css'

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <div
    style={{
        textAlign: 'center',
    }}>
        <input 
        className='search-input'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}     
        placeholder="Agrega una nueva tarea"/>
        <button 
          className='search-button'
          type='button'>
          🔍
        </button>    
     </div>

  )
}

export { TodoSearch }
