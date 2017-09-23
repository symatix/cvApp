import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { validateCommand } from '../utility/validate_command'
import { executeCommand } from '../utility/execute_command'

let state = { input: "", command: "", index: 0, history: [] }

class Console extends Component {
    constructor(props){
        super(props);
        this.state = state;

        this.handleInput = this.handleInput.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.submitCallback = this.submitCallback.bind(this)
    }
    componentWillUnmount() {
        // Remember state for the next mount
        state = this.state;
        state.input = ''
      }
    handleInput(e){
        this.setState({ input: e.target.value })
    }

    handleKeyDown(e){
        if(e.key === "Enter"){
            this.setState({
                history: [...this.state.history,this.state.input],
                index: this.state.history.length + 1,
            })
        }
        if(e.key === "ArrowUp"){
            if(this.state.index > 0){
                this.setState({
                    index: this.state.index - 1,
                    input: this.state.history[this.state.index-1]
                })
            } else {
                this.setState({input:""})
            }
        }
        if(e.key === "ArrowDown"){
            if(this.state.index < this.state.history.length){
                this.setState({
                    index: this.state.index + 1,
                    input: this.state.history[this.state.index]
                })
            } else {
                this.setState({input:""})
            }
        }
    }

    submitCallback(){
        this.props.inputToState(this.state.command)
    }

    handleSubmit(e){
		e.preventDefault();

        const validated = validateCommand(this.state.input);
        const command = executeCommand(validated);
        this.setState({ command: command, input: '' })
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
                this.props.reset();
                this.setState({input:""})
                break;
            case "request":
                this.props.inputToState(command)
                break;
            case "portfolio":
                this.props.fetchPortfolio(this.submitCallback)
                break;
            case "error":
                this.props.inputToState(command)
                this.setState({input:""})
                break;
            default:
                return;
        }


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <span className="green">{this.props.client.address}@ </span>
                <span className="blue">{this.props.route} $ </span>
                <input
                    id="console"
                    type="text"
                    autoFocus={true}
                    autoComplete="off"
                    onChange={this.handleInput}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.input}/>
            </form>
        )
    }
}

function mapStateToProps({ client }){
    return { client }
}
export default connect(mapStateToProps, actions)(Console);
