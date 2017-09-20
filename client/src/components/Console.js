import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { validateCommand } from '../utility/validate_command'
import { executeCommand } from '../utility/execute_command'

class Console extends Component {
    constructor(props){
        super(props);
        this.state = { input: "", command: "" }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.submitCallback = this.submitCallback.bind(this)
    }

    handleInput(e){
        this.setState({ input: e.target.value })
    }

    submitCallback(){
        this.props.inputToState(this.state.command)
    }

    handleSubmit(e){
		e.preventDefault();
        const validated = validateCommand(this.state.input);
        const command = executeCommand(validated);
        this.setState({ command: command })
        
        switch(command){
            case "docs":
                this.props.fetchApi(this.submitCallback)
                break;
            case "contact":
                this.props.fetchContact(this.submitCallback)
                break;
            case "services":
                this.props.fetchServices(this.submitCallback);
                break;
            case "cls":
                this.props.clearState(this.submitCallback);
                break;
            case "request":
                this.props.inputToState(command)
                break;
            case "portfolio":
                this.props.inputToState(command)
                break;
            case "error":
                this.props.inputToState(command)
                break;
            default:
                return;
        }


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <span className="green">{this.props.client.address}@serviceAPI </span>
                <span className="blue">{this.props.route} $ </span>
                <input
                    id="console"
                    type="text"
                    autoFocus="true"
                    autoComplete="off"
                    onChange={this.handleInput}
                    value={this.state.input}/>
            </form>
        )
    }
}

function mapStateToProps({ client }){
    return { client }
}
export default connect(mapStateToProps, actions)(Console);
