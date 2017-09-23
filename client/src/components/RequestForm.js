import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Console from './Console';
import HeadingRequest from './headings/HeadingRequest'
import validateEmail from '../utility/validateEmail';

import InputElement from './InputElement';


let initialState = {
    email: '',
    subject: '',
    text: '',
    confirmation:'',
    inputSubject:false,
    inputText:false,
    inputConfirmation:false,
    console:false,
    output:'',
    outputColor:'',
    errorMsg:'',
}

class RequestForm extends Component {
    constructor(props){
        super(props);

        this.state = { initialState }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleLastKeyPress = this.handleLastKeyPress.bind(this)
        this.nextInput = this.nextInput.bind(this)

    }

    componentDidMount() {
        document.addEventListener('keydown', (e)=> {
           if(e.key === "Escape"){
               this.props.reset();
           }
        });
    }

    nextInput(){
        if (!this.state.inputSubject) {
            const validate = validateEmail(this.state.email);
            if (validate){
                this.setState({inputSubject:true})
                return;
            } else {
                this.setState({errorMsg:'Email value is not valid.'})
                return;
            }
        }
        if (!this.state.inputText){
            this.setState({inputText:true})
            return;
        } else {
            this.setState({errorMsg:'Subject value not present.'})
            return;
        }
    }

    handleKeyDown(e){
        if(e.key === "Enter"){
            this.setState({errorMsg:''})
            this.nextInput();
            return;
        }
        return;
    }

    handleLastKeyPress(e){
        if(e.key === "Enter"){
            this.handleSubmit(e);
            return;
        }
        return;
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleText(e){
        if(e.key === "Enter"){
            if (!this.state.text){
                this.setState({
                    text:'',
                    errorMsg:'Message value not present.'
                })
                return;
            }
            this.setState({
                errorMsg:'',
                inputConfirmation:true
            })
            return;
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const { confirmation } = this.state;

        if (confirmation === "n"){
            initialState.email = this.state.email;
            this.setState(initialState)
            document.querySelector("input").focus();
            return;
        }

        if (confirmation !== "y") {
            this.setState({errorMsg:'y = yes, n = no, esc = quit'})
            return
        }
        this.setState({console:true, output:"waiting...", outputColor:"grey"})
        const { email, subject, text } = this.state;

        const mail = {
            from: email,
            subject,
            text: text + "\n\n\n// from: " + email,   // gmail replaces "from" with authenticated user...so it's me to me by default...
            to:'d.kraljeta@gmail.com'
        }

        this.props.sendMail(
            mail,
            (cb)=>{ cb ? this.setState({output:"success", outputColor:"green"}) : this.setState({output:"error", outputColor:"red"}) },
        )

    }

    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-content">
                        <HeadingRequest />
                        <p>Fill out requested information</p>
                        <p>- to continue, press <span className="green">Enter</span>.</p>
                        <p>- to exit, press <span className="red">Escape</span>.</p>
                    </div>
                </div>
                    <InputElement
                        type="text"
                        name="email"
                        label="(e-mail):"
                        autoFocus={this.state.inputSubject ? false : true}
                        onKeyPress={this.handleKeyDown}
                        onChange={this.handleInput}
                        content={this.state.email}
                    />
                {this.renderSubject()}
                {this.renderText()}
                {this.renderConfirmation()}
                <p className="red">{this.state.errorMsg}</p>
                {this.renderConsole()}
            </div>
        )
    }

    renderSubject(){
        if (this.state.inputSubject){
            return(
                <InputElement
                    type="text"
                    name="subject"
                    label="(subject):"
                    autoFocus={this.state.inputText ? false : true}
                    onKeyPress={this.handleKeyDown}
                    onChange={this.handleInput}
                    content={this.state.subject}
                />
            )
        }
        return;
    }
    renderText(){
        if (this.state.inputText){
            return(
                <div>
                    <label className="grey">(message): </label>
                    <textarea
                        name="text"
                        rows="4"
                        autoComplete="off"
                        spellCheck={false}
                        autoFocus={this.state.inputConfirmation ? false : true}
                        onKeyPress={this.handleText}
                        onChange={this.handleInput}
                        value={this.state.text} />
                </div>
            )
        }
        return;
    }
    renderConfirmation(){
        if (this.state.inputConfirmation){
            return(
                    <InputElement
                        type="text"
                        name="confirmation"
                        label="confirm (y/n):"
                        autoFocus={true}
                        onKeyPress={this.handleLastKeyPress}
                        onChange={this.handleInput}
                        content={this.state.confirmation}
                    />
            )
        }
        return;
    }

    renderConsole(){
        if(this.state.console){
            return (
                <div>
                    <p>> response
                        [<span className={this.state.outputColor}>
                            {this.state.output}
                        </span>]
                    </p>
                    <Console route="/request"/>
                </div>
            )
        }
        return;
    }
}

export default connect(null, actions)(RequestForm)
