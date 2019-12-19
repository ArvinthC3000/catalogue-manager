import React, { Component } from 'react'
import './App.css';
import Form from './components/Form'
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor(){
    super()
    this.state = {
      createProduct: false,
      viewProduct: false
    }
  }

  handleClick = async (e) => {
    const { name } = e.target
    await this.setState(prevState => ({
      createProduct : false,
      viewProduct : false,
      [name]: true
    }))
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <Button name='createProduct' onClick={this.handleClick} >Create Product</Button>
        <Button name='viewProduct' onClick={this.handleClick}>View Products</Button>
        {this.state.createProduct && <Form />}
        {this.state.viewProduct}
        
      </div>
    );
  }
}

export default App;
