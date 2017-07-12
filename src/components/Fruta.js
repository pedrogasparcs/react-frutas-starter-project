import React, { Component } from 'react';

class Fruta extends Component {
  handleDelete () {
    !this.props.onDelete || this.props.onDelete ()
  }
  handleCheckClick (evt) {
    !this.props.onCheck || this.props.onCheck (evt.target.checked)
  }
  render () {
    return (
      <li style={this.props.checked ? {textDecoration:'line-through'} : {}}>
        <input type="checkbox" checked={this.props.checked} onClick={this.handleCheckClick.bind(this)}/>
        {this.props.prefix} -
        {this.props.children}
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    )
  }
}

export default Fruta;
