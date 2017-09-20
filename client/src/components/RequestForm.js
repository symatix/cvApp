import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Console from './Console';
import validateEmail from '../utility/validateEmail';


const initialState = {
    from: '',
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

        this.handleFrom = this.handleFrom.bind(this)
        this.handleSubject = this.handleSubject.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleForm = this.handleForm.bind(this)
        this.handleConfirmation = this.handleConfirmation.bind(this)
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
        return;
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
    handleForm(e){
        if(e.key === "Enter"){
            if (!this.state.text){
                this.setState({errorMsg:'Message value not present.'})
                return;
            }
            this.setState({errorMsg:''})
            this.setState({inputConfirmation:true})
            return;
        }
    }

    handleConfirmation(e){
        this.setState({confirmation:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const { confirmation } = this.state;

        if (confirmation === "n"){
            this.setState(initialState)
            this.refs.inputRestart.focus();
            return;
        }

        if (confirmation === "quit") {
            this.props.clearState(()=> this.setState(initialState));
        }

        if (confirmation !== "y") {
            this.setState({errorMsg:'y = yes, n = no, quit.'})
            return
        }
        this.setState({console:true, output:"waiting...", outputColor:"grey"})
        const { from, subject, text } = this.state;

        const mail = {
            from,
            subject,
            text: text + "\n\n\n// from: " + from,   // gmail replaces "from" with authenticated user...so it's me to me by default...
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
                            ref="inputRestart"
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
                {this.renderConfirmation()}
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
                            autoFocus={this.state.inputConfirmation ? false : true}
                            spellCheck={false}
                            autoComplete="off"
                            onKeyPress={this.handleForm}
                            onChange={this.handleText}
                            value={this.state.text} />
                        </div>
                </form>
            )
        }
        return;
    }
    renderConfirmation(){
        if (this.state.inputConfirmation){
            return(
                <form>
                    <div className={this.state.inputSubject ? "" : "hidden"}>
                        <span className="grey">confirm (y/n/quit): </span>
                        <input
                            name="subject"
                            type="text"
                            spellCheck={false}
                            autoFocus={true}
                            autoComplete="off"
                            onKeyPress={this.handleLastKeyPress}
                            onChange={this.handleConfirmation}
                            value={this.state.confirmation} />
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
                    <p>> response: <span className={this.state.outputColor}>{this.state.output}</span></p>
                    <Console route="/request"/>
                </div>
            )
        }
        return;
    }
}

export default connect(null, actions)(RequestForm)
