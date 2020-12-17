import React, { Component } from 'react';
import axios from 'axios'

class Inputs extends Component {
    state = { 
        value:''
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const val = this.state;
        axios.post('/api/send',{val})
            .then(res=>{
                console.log(res)
                console.log(res.data)
            })
        this.setState({value:''})
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Type your thoughts here..." value={this.state.value} onChange={(e)=>{this.setState({value: e.target.value})}} aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <input className="btn btn-outline-success" value="Send" onClick={()=>{this.props.onInput(this.state.value)}} type="submit" id="button-addon2"/>
                </div>
            </form>
        );
    }
}
 
export default Inputs;