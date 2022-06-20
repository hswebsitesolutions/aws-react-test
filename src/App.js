import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          variant="contained" 
          color="secondary"
          startIcon={<SaveIcon />}>
          Hello world
        </Button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is a demo react app
        </p>
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
