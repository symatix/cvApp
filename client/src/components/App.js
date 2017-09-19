import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientData from './ClientData';
import Landing from './Landing';
import Docs from './Docs';
import Console from './Console';
import Services from './Services';
import Contact from './Contact';
import Err from './Err';

class App extends Component {
    handleClick(){
        document.getElementById("console").focus();
        return;
    }

    renderResult(){

        if (this.props.result){
            switch(this.props.result){
                case "docs":
                    return <Docs />
                case "contact":
                    return (
                        <div>
                            <Contact />
                        </div>
                    )
                case "services":
                    return <Services />
                case "cls":
                    return;
                case "error":
                    return <Err />;
                default:
                    return <Landing />;
            }
        }
        return <Landing />

    }
  render() {
    return (
      <div onClick={this.handleClick} className="App">
        <div>
            <ClientData />


            {this.renderResult()}


            <Console />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ result }){
    return { result }
}

export default connect(mapStateToProps)(App);
