import React, { Component } from "react";
import { connect } from "react-redux";
import HeadingPortfolio from './headings/HeadingPortfolio'

import InputElement from "./InputElement";

class Protfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            errorMsg:'',
            last: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount(){
        window.addEventListener('click', (e) => {
            document.querySelector("input").focus();
        })
    }

    handleInput(e) {
        this.setState({ input: e.target.value });
    }
    handleKeyPress(e) {
        if (e.key === "Enter") {
            if (this.state.input > 0 && this.state.input <= this.props.portfolio.length) {
                const url = this.props.portfolio[this.state.input - 1]["url"]
                const name = this.props.portfolio[this.state.input - 1]["name"]

                this.setState({
                    input: '',
                    errorMsg:'',
                    last:`last viewed -> [${this.state.input}] ${name}`},
                    ()=> {
                        window.open(url, "_blank")
                        document.querySelector("input").value = ''
                    }
                );
                return;
            }
            this.setState({input:'', errorMsg:'Please select a number from the list or press [ESCAPE] to exit.'})
            return;
        }
        return;
    }

    renderContent() {
        return this.props.portfolio.map(({ name, description }) => {
            return (
                <li key={name}>
                    <span className="bold">{name}: </span>
                    {description}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <HeadingPortfolio />
                        <p>Type in a <span className="green">number</span> from the list to open the desired link in a new window.<br/>
                        Press <span className="red">Escape</span> to exit.</p>
                        <p className="red" />
                        <ol>{this.renderContent()}</ol>
                    </div>
                </div>
                <InputElement
                    type="number"
                    name="portfolio"
                    label="(number/escape):"
                    autoFocus={this.state.answer ? false : true}
                    onChange={this.handleInput}
                    onKeyPress={this.handleKeyPress}
                    content={this.state.input}
                />
                <p className="red">{this.state.errorMsg}</p>
                <p className="blue">{this.state.last}</p>
            </div>
        );
    }
}
function mapStateToProps({ portfolio }) {
    return { portfolio };
}
export default connect(mapStateToProps)(Protfolio);
