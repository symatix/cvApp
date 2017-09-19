import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { validateCommand } from '../utility/validate_command'
import { executeCommand } from '../utility/execute_command'

class Console extends Component {
    constructor(props){
        super(props);
        this.state = { input: "" }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.submitCallback = this.submitCallback.bind(this)
    }

    handleInput(e){
        this.setState({ input: e.target.value, command: '' })
    }

    submitCallback(){
        this.props.inputToState(this.state.command)
        this.setState({ input: '' })
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
                this.props.fetchContact(validated[0], this.submitCallback)
                break;
            case "services":
                this.props.fetchServices(this.submitCallback);
                break;
            case "cls":
                this.props.clearState(this.submitCallback);
                break;
            case "error":
                this.props.inputToState(command)
                this.setState({ input: '' })
                break;
            default:
                return;
        }


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <span className="green">{this.props.client.address}@servicesAPI </span>
                <span className="blue">/usr/shell $ </span>
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
