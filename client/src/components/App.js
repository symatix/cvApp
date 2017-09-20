import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientData from './ClientData';
import Landing from './Landing';
import Docs from './Docs';
import Services from './Services';
import Contact from './Contact';
import RequestForm from './RequestForm';
import Err from './Err';

class App extends Component {
    focusConsole(){
        document.querySelector("input").focus();
    }
    componentDidMount(){
        if(this.props.result !== "request"){
            window.addEventListener('click', this.focusConsole);
        }

        return;
    }

    renderResult(){

        if (this.props.result){
            switch(this.props.result){
                case "docs":
                    return <Docs />
                case "contact":
                    return <Contact />
                case "services":
                    return <Services />
                case "request":
                    return <RequestForm />
                case "portfolio":
                    return <p>PORTFOLIO</p>
                case "cls":
                    return;
                case "error":
                    return <Err />;
                default:
                    return <Landing />
            }
        }
        return <Landing />
    }
  render() {
    return (
        <div className="App">
            <ClientData />
            {this.renderResult()}
        </div>
    );
  }
}

function mapStateToProps({ result }){
    return { result }
}

export default connect(mapStateToProps)(App);
