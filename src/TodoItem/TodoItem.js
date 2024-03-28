import "./TodoItem.css";

function TodoItem (props) {
    return (
      <li className='todoItem-container'>
          <input 
          type="checkbox" 
          className="checkbox"
          onChange={props.onComplete}
          checked={props.status}
          />
          <p> {props.text} </p>
          <span 
          className="cross"
          onClick={props.onDelete}
          > ❌ 
          </span>
          
      </li>
  
    );
  }

export { TodoItem }