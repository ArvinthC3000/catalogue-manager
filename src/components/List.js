import React, { Component } from 'react'
import Axios from 'axios'
import ListComponent from './ListComponent'

class List extends Component {
    constructor(){
        super()
        this.state={
            data : []
        }
    }
    async componentDidMount(){
        await Axios.get('http://catalogue-server.herokuapp.com/api/view').then(async res=>{
            const data = []
            for(let i = 0;i < res.data.data.length; i++){
                data.push(res.data.data[i])
            }
            this.setState({data:data})
        })
    }


    render() {
        return (
            <div>
                <ListComponent  data={this.state.data} />
            </div>
        )
    }
}

export default List