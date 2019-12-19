import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Form extends Component {
    render() {
        return (
            <div className='formDiv'>
                <form /*onSubmit={this.handleSubmit}*/ className='form'>
                    
                    <label>Product Name:</label>
                    <input 
                        type="text" 
                        // value={this.state.firstName} 
                        name="firstName" 
                        placeholder="Product" 
                        // onChange={this.handleChange} 
                        />
                    <br />
                    <label>Brand:</label>
                    <input 
                        type="text" 
                        // value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Brand" 
                        // onChange={this.handleChange} 
                        />
                    <br />
                    <label>Category:</label>
                    <input 
                        type="text" 
                        // value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Category" 
                        // onChange={this.handleChange} 
                        />
                    <br />
                    <label>Parent Category:</label>
                    <input 
                        type="text" 
                        // value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Parent Category" 
                        // onChange={this.handleChange} 
                        />
                    <br />
                    <label>Specification:</label>
                    <input 
                        type="text" 
                        // value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Specification" 
                        // onChange={this.handleChange} 
                    />
                    <br />
                    
                    <p>Please confirm the details before submitting</p>
                    <Button variant="secondary">Submit</Button>
                </form>
                <Button variant="dark">Go Back</Button>
            </div>
        )
    }
}

export default Form