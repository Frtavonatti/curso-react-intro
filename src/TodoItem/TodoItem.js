import "./TodoItem.css";

function TodoItem (props) {
    return (
      <li className='todoItem-container'>
          <input type="checkbox" />
          <p> {props.text} </p>
          <span> ❌ </span>
      </li>
  
    );
  }

export { TodoItem }