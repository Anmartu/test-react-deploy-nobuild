import React from 'react'
import './App.css';
import logo from './imatges/fcc-logo.png';
import Contador from './components/Contador.js';
import Boto from './components/Boto.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1}))
  }

  reiniciarContador() {
    this.setState({ numClics:0 });
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenidor'>
          <img 
            className='freecodecamp-logo'
            src={logo}
            alt='Logo de freecodecamp'/>
        </div>
        <div className='contenidor-principal'> 
          <Contador numClics={this.state.numClics}/>
          <Boto 
            text='Clic'
            esBotoClic={true}
            manejarClic={this.manejarClic}/>
          <Boto 
            text='Reiniciar'
            esBotoClic={false}
            manejarClic={this.reiniciarContador}/>
        </div>
      </div>
    );
  }
}

export default App;
