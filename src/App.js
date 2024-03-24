import logo from './react512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <TodoItem/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciando proyecto
        </a>
      </header>
    </div>
  );
}

function TodoItem () {
  return (
    <li>
        <span> ✅ </span>
        <p> 1 hora de coding </p>
        <span> ❌ </span>
    </li>

  );
}

export default App;
