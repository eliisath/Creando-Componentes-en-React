import logo from './logo.svg';
import './App.css';

import Usuario from './components/Usuario/Usuario';
import ListaDeTareas from './components/Tarea/ListaDeTareas';
import Contador from './components/Contador/Contador';

import { useState } from 'react';
import Saludo from './components/Saludo/Saludo';

function App() {
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setMensaje(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Usuario nombre="Elisa" /> */}
        {/* <ListaDeTareas /> */}
        {/* <Contador/> */}
        <input
          type='text'
          placeholder='Ingrese Mensaje'
          value={mensaje}
          onChange={handleChange} />
        <Saludo mensaje={mensaje} />
      </header>
    </div>
  );
}

export default App;
