import React, { Component } from 'react';
import axios from 'axios'

class Outputs extends Component {
    state={
        messages:[]
    }

    componentDidMount(){
        this.timerID = setInterval(()=>{
            axios.get('/api/send')
                .then(res=> this.setState({messages:res.data}))
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render() { 
        return (
            <div>
                <ul className="card list-group list-group-flush" id="main-output">
                    {this.state.messages.map(m => <li className="card-body list-group-item" key={m.message}><i className="fa fa-user" aria-hidden="true"></i>  {m.message}</li>)}
                </ul>
            </div>
        );
    }
}
 
export default Outputs;