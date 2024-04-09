import './styles.css'

function CreateTodoButton() {
  return (
    <div style={{
        textAlign: 'center'
    }}>
      <button  
        className='createTodo-button'
        onClick={() => console.log('Click')}
        type="button">Crear nueva tarea</button>
    </div>
  )
}

export { CreateTodoButton }
