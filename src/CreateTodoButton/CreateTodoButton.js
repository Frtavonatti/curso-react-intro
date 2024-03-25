import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <div style={{
        textAlign: 'center'
    }}>
      <button  
        className='createTodo-button'
        type="button">Crear nueva tarea</button>
    </div>
  )
}

export { CreateTodoButton }
