import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions';
import ClientData from './ClientData';
import Landing from './Landing';
import Docs from './Docs';
import Services from './Services';
import Contact from './Contact';
import RequestForm from './RequestForm';
import Portfolio from './Portfolio';
import Err from './Err';

class App extends Component {
    focusConsole(){
        if (document.querySelector("#console")){
            document.querySelector("#console").focus();
        }
    }
    componentDidMount(){
        window.addEventListener('click', this.focusConsole);
        document.addEventListener("keydown", e => {
            if( e.key === "Escape"){
                    this.props.reset();
            }

        })

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
                    return <Portfolio />
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

export default connect(mapStateToProps, { reset })(App);
