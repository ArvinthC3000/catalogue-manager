import React, { Component } from 'react'
import './App.css';
import Form from './components/Form'
import List from './components/List'
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
      button: false,
      [name]: true
    }))
  }

  render(){
    return (
      <div className='wrapper'>
        <div className='buttonWrapper'>
          <Button name='createProduct' onClick={this.handleClick} >Create Product</Button>
          <Button name='viewProduct' onClick={this.handleClick}>View Products</Button>
        </div>
        {this.state.createProduct && <Form buttonPage = {this.state.button}/>}
        {this.state.viewProduct && <List />}
        
      </div>
    );
  }
}

export default App;
