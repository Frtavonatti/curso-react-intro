import React from 'react'

function TodoCounter({total, completed}) {
  return (
    <div>
        <h2 style={{
          textAlign: 'center'
          }}>
            Has completado {completed} de {total} To-Do´s 
        </h2> 
    </div>
  )
}

export { TodoCounter }