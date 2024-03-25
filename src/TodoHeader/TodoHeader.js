import './TodoHeader.css'

function TodoHeader() {
  return (
    <div className='header-container'>
        <img 
            src='react192.png' 
            className='App-logo App-logo-spin'
            alt="React Logo"
        ></img>
      <h1 className='header-title'>React To-Do</h1>
    </div>
  )
}

export { TodoHeader }
