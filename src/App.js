import React, { Component } from 'react';
import { lista } from './lista.json';
import Listado from 'components/lista';

import Formulario from './components/formulario'

class App extends Component {
  constructor() {
    super();
    this.state = {
      lista
    }
    this.handleAgregarTarea = this.handleAgregarTarea.bind(this)
  }
  handleAgregarTarea(listaNueva) {
    this.setState({
      lista: [...this.state.lista, listaNueva]
    })
  }
  render() {
    const lista = this.state.lista.map((tarea, i) => { 
      return (
        <Listado tareas={tarea} key={i} />
      )
    })
    return (
      <div className="Container">
        <div>
          <span className="contador">
            {this.state.lista.length}
          </span>
        </div>
        <div>
          <Formulario onAgregarTarea={this.handleAgregarTarea} />
        </div>
        <div>
          {lista}
        </div>
      </div>
    );
  }

}


export default App


