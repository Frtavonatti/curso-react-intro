import './TodoSearch.css'

function TodoSearch() {
  return (
    <div
    style={{
        textAlign: 'center',
    }}>
        <input 
        className='search-input'     
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
