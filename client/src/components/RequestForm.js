import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Console from './Console';
import validateEmail from '../utility/validateEmail';


class RequestForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            from: '',
            to: 'd.kraljeta@gmail.com',
            subject: '',
            text: '',
            inputSubject:false,
            inputText:false,
            console:false,
            output:'Waiting for response',
            outputColor:'grey',
            errorMsg:'',
        }

        this.handleFrom = this.handleFrom.bind(this)
        this.handleSubject = this.handleSubject.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLastKeyPress = this.handleLastKeyPress.bind(this)
        this.nextInput = this.nextInput.bind(this)

    }


    nextInput(e){
        e.preventDefault();

        if (!this.state.inputSubject) {
            const validate = validateEmail(this.state.from);
            if (validate){
                this.setState({inputSubject:true})
                this.setState({errorMsg:''})
                return;
            } else {
                this.setState({errorMsg:'Email value is not valid.'})
                return;
            }
        }
        if (!this.state.inputText){
            if(this.state.subject){
                this.setState({inputText:true})
                return;
            } else {
                this.setState({errorMsg:'Subject value not present.'})
                return;
            }
        }
    }


    handleLastKeyPress(e){
        if(e.key === "Enter"){
            this.handleSubmit(e);
            return;
        }
        return;
    }

    handleFrom(e){
        this.setState({from:e.target.value})
    }
    handleSubject(e){
        this.setState({subject:e.target.value})

    }
    handleText(e){
        this.setState({text:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        if(e.key !== "Enter"){
            return;
        }
        const { from, subject, text, to } = this.state;

        if(!text){
            this.setState({errorMsg:'Message value not present.'})
            return;
        } else {
            this.setState({errorMsg:''})
        }

        const mail = {
            from,
            to,
            subject,
            text: text + "\n\n\n// from: " + from   // gmail replaces "from" with authenticated user...so it's me to me by default...
        }
        this.props.sendMail(
            mail,
            ()=>{this.setState({output:"Success: Request sent!", outputColor:"green"})},
            ()=>{this.setState({output:"Error: message not sent", outputColor:"red"})},
        )
        this.setState({console:true})
    }

    render(){
        return(
            <div>
                <pre>
                {`
                                 _
                                | |
  _ __ ___  __ _ _   _  ___  ___| |_
 | '__/ _ \\/ _' | | | |/ _ \\/ __| __|
 | | |  __/ (_| | |_| |  __/\\__ \\ |_
 |_|  \\___|\\__, |\\__,_|\\___||___/\\__|
              | |
              |_|
                `}
                </pre>
                <form onSubmit={this.nextInput}>
                    <div>
                        <span className="grey">(email): </span>
                        <input
                            name="from"
                            type="text"
                            spellCheck={false}
                            autoFocus={this.state.inputSubject ? false : true}
                            autoComplete="off"
                            onChange={this.handleFrom}
                            value={this.state.from} />
                    </div>
                </form>
                {this.renderSubject()}
                {this.renderText()}
                <p className="red">{this.state.errorMsg}</p>
                {this.renderConsole()}
            </div>
        )
    }

    renderSubject(){
        if (this.state.inputSubject){
            return(
                <form onSubmit={this.nextInput}>
                    <div className={this.state.inputSubject ? "" : "hidden"}>
                        <span className="grey">(subject): </span>
                        <input
                            name="subject"
                            type="text"
                            spellCheck={false}
                            autoFocus={this.state.inputText ? false : true}
                            autoComplete="off"
                            onChange={this.handleSubject}
                            value={this.state.subject} />
                    </div>
                </form>
            )
        }
        return;
    }
    renderText(){
        if (this.state.inputText){
            return(
                <form>
                    <div className={this.state.inputText ? "" : "hidden"}>
                        <label className="grey">(message): </label>
                        <textarea
                            name="text"
                            rows="4"
                            autoFocus={true}
                            spellCheck={false}
                            autoComplete="off"
                            onChange={this.handleText}
                            onKeyPress={this.handleLastKeyPress}
                            value={this.state.text} />
                        </div>
                </form>
            )
        }
        return;
    }

    renderConsole(){
        if(this.state.console){
            return (
                <div>
                    <p className={this.state.outputColor}>{this.state.output}</p>
                    <Console route="/request"/>
                </div>
            )
        }
        return;
    }
}

export default connect(null, actions)(RequestForm)
