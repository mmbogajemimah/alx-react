import logo from './logo.jpg';
import './App.css';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';


function App() {
  return (
    <>
      <header className='App-header'>
        <img src={logo} alt="Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='text' />
        <label htmlFor='password'>Password:</label>
        <input id='password' type='text'/>
        <button>OK</button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </>
  );
}

export default App;
