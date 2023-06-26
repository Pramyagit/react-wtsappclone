import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to Wtsapp Clone
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        WtsappClone
        <Nav />
        </a>
      </header>
    </div>
  );
}

export default App;
