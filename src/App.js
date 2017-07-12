import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Fruta from './components/Fruta'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      appTitle: "Welcome to React",
      frutas: [
        {
          checked: false,
          name: "Bananas"
        },
        {
          checked: false,
          name: "Amendoins"
        },
        {
          checked: false,
          name: "Laranjas"
        },
        {
          checked: false,
          name: "Maçãs"
        },
      ]
    }
  }

  handleChange (evt) {
    //appTitle = evt.target.value
    //console.log(appTitle, evt.target.value);
    this.setState({
      appTitle: evt.target.value
    })
  }

  handleAddFruta (evt) {
    evt.preventDefault()
    //console.log(this.input_add_fruta.value)
    this.state.frutas.push({
      checked: false,
      name: this.input_add_fruta.value})
    this.setState({
      frutas: this.state.frutas
    })
  }

  handleDeleteFruta (indexFruta, evt) {
    this.state.frutas.splice(indexFruta, 1)
    this.setState({
      frutas: this.state.frutas
    })
  }

  handleCheckFruta (indexFruta, state) {
    // estamos a mutar o estado, não o deveríamos fazer,
    // ainda que o LifeCycle esteja a ser cumprido
    this.state.frutas[indexFruta].checked = state
    this.setState({
      frutas: this.state.frutas
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo}
               className="App-logo"
               alt="logo"
          />
        <h2>{this.state.appTitle}</h2>
          <input type="text" onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="lista-container">
          <form onSubmit={this.handleAddFruta.bind(this)}>
            <input type="text" ref={(el) => this.input_add_fruta = el}/>
          </form>
          <ul>
            {
              this.state.frutas.map((item, index) => {
                return <Fruta key={"chave" + index}
                  checked={item.checked}
                  prefix={index + 1}
                  onDelete={this.handleDeleteFruta.bind(this, index)}
                  onCheck={(state) => this.handleCheckFruta(index, state)}
                >{item.name}</Fruta>
              })
            }
          </ul>
          <ul>
            {
              this.state.frutas.map((item, index) => {
                return <Fruta key={"chave" + index}
                  checked={item.checked}
                  prefix="2"
                  onDelete={this.handleDeleteFruta.bind(this, index)}
                  onCheck={(state) => this.handleCheckFruta(index, state)}
                >{item.name}</Fruta>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
