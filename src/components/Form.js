import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            productName: '',
            category:'',
            brand:'',
            parentCategory:'',
            specification:''
        }
    }

    handleChange = async (e) =>{
        const { name, value } = e.target
        await this.setState({ [name]: value })
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        await Axios.post('http://catalogue-server.herokuapp.com/api/add',this.state)
        .then(this.setState({
                productName: '',
                category:'',
                brand:'',
                parentCategory:'',
                specification:''
            })
        )
    }
    
    render() {
        return (
            <div className='formDiv'>
                <form onSubmit={this.handleSubmit} className='form'>
                    
                    <label>Product Name:</label>
                    <input 
                        type="text" 
                        value={this.state.productName} 
                        name="productName" 
                        placeholder="Product" 
                        onChange={this.handleChange} 
                        />
                    <br />
                    <label>Brand:</label>
                    <input 
                        type="text" 
                        value={this.state.brand} 
                        name="brand" 
                        placeholder="Brand" 
                        onChange={this.handleChange} 
                        />
                    <br />
                    <label>Category:</label>
                    <input 
                        type="text" 
                        value={this.state.category} 
                        name="category" 
                        placeholder="Category" 
                        onChange={this.handleChange} 
                        />
                    <br />
                    <label>Parent Category:</label>
                    <input 
                        type="text" 
                        value={this.state.parentCategory} 
                        name="parentCategory" 
                        placeholder="Parent Category" 
                        onChange={this.handleChange} 
                        />
                    <br />
                    <label>Specification:</label>
                    <input 
                        type="text" 
                        value={this.state.specification} 
                        name="specification" 
                        placeholder="Specification" 
                        onChange={this.handleChange} 
                    />
                    <br />
                    
                    <p>Please confirm the details before submitting</p>
                    <button>
                        <Button variant="secondary">Submit</Button>
                    </button>
                </form>
            </div>
        )
    }
}

export default Form