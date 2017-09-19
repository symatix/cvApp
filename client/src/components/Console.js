import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Console extends Component {
    constructor(props){
        super(props);
        this.state = { input: "", error: false }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        this.setState({ input: e.target.value })
    }

    validateInput(input){

    }

    handleSubmit(e){
		e.preventDefault();
        this.setState({ error: false })

        const input = this.state.input.split('(');
        let command;
        let request;

        if (input.length > 1){
            request = input[0].split('.');
            request = request[1].substring(0, input[1].length - 1).trim().toLowerCase();
            command = input[1].substring(0, input[1].length - 1).trim().toLowerCase();
        } else {
            command = input[0].trim().toLowerCase();
        }
        if (command === "documentation" || command === "help"){
            this.props.fetchApi(() => this.setState({ input: '' }))

        } else if (request === "get" && command.includes("contact")){
            this.props.fetchContact(command, () => this.setState({ input: '' }))

        } else if (request === "get" && command === "services"){
            this.props.fetchServices(() => this.setState({ input: '' }))

        } else if (command === "cls") {
            this.props.clearState(() => this.setState({ input: '' }));

        } else {
            this.props.fetchData()
            this.setState({ error: true })
        }
    }
    render(){
        return(
        <div>

            <p className={this.state.error ? "red" : "hidden"}>The command is not recodnized</p>
            <form onSubmit={this.handleSubmit}>
                > <input
                    id="console"
                    type="text"
                    autoFocus="true"
                    autoComplete="off"
                    onChange={this.handleInput}
                    value={this.state.input}/>
            </form>
        </div>
        )
    }
}

export default connect(null, actions)(Console);
