import logo from './logo.svg';
import hola from './hola.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hola} className="appImagehola" alt="Hello world!" />
        <p className="holaMundo">¡Hola Mundo en React!</p>
        <img src={logo} className="appImage" alt="imagen react" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
