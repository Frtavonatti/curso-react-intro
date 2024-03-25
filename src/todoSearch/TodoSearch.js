import React from 'react'
import './TodoSearch.css'

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('')


  return (
    <div
    style={{
        textAlign: 'center',
    }}>
        <input 
        className='search-input'
        // Al agregar la siguiente linea de codigo (antes del setState) se genera un error:
        // value={searchValue}
        
        // Warning: A component is changing an uncontrolled input to be controlled. 
        // This is likely caused by the value changing from undefined to a defined value, which should not happen. 
        // Decide between using a controlled or uncontrolled input element for the lifetime of the component. 
        // More info: https://reactjs.org/link/controlled-components
        onChange={(event) => {
          setSearchValue(event.target.value)
          console.log(searchValue)
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
