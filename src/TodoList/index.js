function TodoList(props) {
  return (
    <div>
      <ul style={{
        textAlign: 'center'
      }}>
        {props.children}
      </ul>
    </div>
  )
}

export { TodoList }
